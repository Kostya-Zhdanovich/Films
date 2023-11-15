import { Dispatch } from "redux";
import { filmsApi } from "../../../client/api/filmsApi";
import { fullFilmActions } from "./fullFilmActions";

export const getFilm = async (id: string) => {
  const res = await filmsApi.getFullFilm(id);
  return res?.data;
};

export const setFullFilmAsync = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
        const film = await getFilm(id)
        dispatch(fullFilmActions.addFullFilm(film))
    } catch (error) {}
  };
};
