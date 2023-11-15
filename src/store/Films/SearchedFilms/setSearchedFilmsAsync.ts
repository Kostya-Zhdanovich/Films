import { Dispatch } from "redux";
import { filmsApi } from "../../../client/api/filmsApi";
import { filmsActions } from "../filmsActions";
import { IFilm } from "../../../types";

interface IRating {
  rating: number;
}

const getFilms = async (filmTitle: string, page?: number) =>
  (await filmsApi.searchFilms(filmTitle, page))?.data;

const getRatings = async () =>
  (await filmsApi.getRatings())?.data.map((ratingObj: IRating) => ratingObj.rating) || [];

export const setSearchedFilmsAsync = (
  searchTitle: string,
  filmsPerList: number,
  page?: number
) => async (dispatch: Dispatch) => {
  try {
    const films = await getFilms(searchTitle, page);
    const ratings = await getRatings();

    const fullFilms = films?.Search?.map((film: IFilm, idx: number) => ({
      ...film,
      imdbRating: ratings[idx],
    })) || [];

    dispatch(
      filmsActions.searchFilms({
        apiFilmsResponse: { ...films, Search: fullFilms } || { Search: [], totalResults: 0 },
        filmsPerList,
        searchTitle,
      })
    );
  } catch (error) {
    dispatch(
      filmsActions.searchFilms({
        apiFilmsResponse: { Search: [], totalResults: 0 },
        filmsPerList,
        searchTitle,
      })
    );
  }
};
