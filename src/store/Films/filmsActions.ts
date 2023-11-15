import { ISearchFilms } from "../../types";

export enum filmsActionsEnum {
  SET_FILMS = "SET_FILMS",
  SET_NEW_FILMS = "SET_NEW_FILMS",
  SEARCH_FILMS = "SEARCH_FILMS",
}

export interface ISetFilmsPayload {
  apiFilmsResponse: ISearchFilms;
  filmsPerList: number;
  searchTitle?: string;
}

export const filmsActions = {
  setFilms: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SET_FILMS, payload };
  },
  setNewFilms: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SET_NEW_FILMS, payload };
  },
  searchFilms: (payload: ISetFilmsPayload) => {
    return { type: filmsActionsEnum.SEARCH_FILMS, payload };
  },
};
