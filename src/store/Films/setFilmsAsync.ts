import { Dispatch } from "redux";
import { filmsApi } from "../../client/api/filmsApi";
import { filmsActions } from "./filmsActions";
import { IFilm } from "../../types";

interface IRating {
  rating: number;
  id: number;
}

const getFilms = async (page?: number) => {
  const res = await filmsApi.getfilms(page);
  return res?.data;
};

const getRatings = async () => {
  const res = await filmsApi.getRatings();
  return res?.data;
};

export const setFilmsAsync = (
  isNewFilms: boolean,
  filmsPerList: number,
  page?: number
) => {
  return async (dispatch: Dispatch) => {
    try {
      const films = await getFilms(page);
      const ratingsResponse = await getRatings();

      const ratings = ratingsResponse.map((ratingObj: IRating) => ratingObj.rating);

      const fullFilms = films.Search.map((film: IFilm, idx: number) => {
        return { ...film, imdbRating: ratings[idx] };
      });

      const readyFilmsData = { ...films, Search: fullFilms };

      if (fullFilms) {
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
    } catch (error) {
      const emptyObject = {
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
};
