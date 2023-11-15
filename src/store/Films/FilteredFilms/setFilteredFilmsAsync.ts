import { Dispatch } from "redux";
import { filmsApi } from "../../../client/api/filmsApi";
import { filmsActions } from "../filmsActions";
import { IFilters, ISearchFilms, sortByEnum } from "../../../types";
import { getRatingForFilters } from "../../helpers";
import { filtersACtions } from "../../Filters/filtersActions";

interface IRating {
  rating: number;
}

const getFilms = async (page: number, year?: number) => {
  const res = await filmsApi.getfilms(page, year);
  return res?.data;
};

const getRatings = async () => {
  const res = await filmsApi.getRatings();
  return res?.data?.map((ratingObj: IRating) => ratingObj.rating) || [];
};

const getFilmsByYears = async (
  page: number,
  yearFrom: number,
  yearTo: number
) => {
  const filmsRes = await getFilms(page, yearFrom);
  if (filmsRes.Search.length < 0) {
    for (
      let i = yearFrom + 1;
      i <= yearTo && filmsRes.Search.length < 10;
      i++
    ) {
      const restOfFilms = await getFilms(page, i);
      filmsRes.Search.concat(restOfFilms);
      filmsRes.totalResults = restOfFilms.totalResults;
    }
  }
  return filmsRes;
};

export const setFilteredFilmsAsync = (
  isNewFilms: boolean,
  filmsPerList: number,
  page: number,
  filters: IFilters
) => async (dispatch: Dispatch) => {
  try {
    const films: ISearchFilms =
      filters.yearFrom && filters.yearTo
        ? await getFilmsByYears(page, filters.yearFrom, filters.yearTo)
        : await getFilms(page);

    let ratings: number[] = [];

    if (films) {
      if (filters.ratingFrom && filters.ratingTo) {
        ratings = getRatingForFilters(
          films.Search.length,
          filters.ratingFrom,
          filters.ratingTo
        );
      } else {
        try {
          ratings = await getRatings();
        } catch (error) {
          console.log(error);
        }
      }

      const fullFilms = films.Search.map((film, idx: number) => ({
        ...film,
        imdbRating: ratings[idx],
      }));

      let readyFilmsData: ISearchFilms = { ...films, Search: fullFilms };

      if (filters.sortBy === sortByEnum.RATING) {
        readyFilmsData.Search.sort((film1, film2) => film1.imdbRating - film2.imdbRating);
      } else if (filters.sortBy === sortByEnum.YEAR) {
        readyFilmsData.Search.sort((film1, film2) => film1.Year - film2.Year);
      }

      if (fullFilms) {
        if (
          filters.yearFrom &&
          films.Search[0].Year !== films.Search[films.Search.length - 1].Year
        ) {
          dispatch(
            filtersACtions.changeFilters({
              yearFrom: +films.Search[films.Search.length - 1].Year + (films.totalResults > 10 ? 0 : 1),
            })
          );
        }

        isNewFilms
          ? dispatch(
              filmsActions.setNewFilms({
                apiFilmsResponse: readyFilmsData,
                filmsPerList,
              })
            )
          : dispatch(
              filmsActions.setFilms({
                apiFilmsResponse: readyFilmsData,
                filmsPerList,
              })
            );
      }
    }
  } catch (error) {
    const emptyObject: ISearchFilms = {
      Search: [],
      totalResults: 0,
    };
    dispatch(
      filmsActions.setFilms({
        apiFilmsResponse: emptyObject,
        filmsPerList,
      })
    );
  }
};
