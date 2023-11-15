import { IFilm } from "../../../types";

export enum favFilmsActionsEnum {
  ADD_TO_FAVS = "ADD_TO_FAVS",
  REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS",
}

export const favFilmsActions = {
  addToFavs: (payload: IFilm) => {
    return {type: favFilmsActionsEnum.ADD_TO_FAVS, payload};
  },
  removeFromFavs: (payload: IFilm) => {
    return {type: favFilmsActionsEnum.REMOVE_FROM_FAVS, payload};
  },
};
