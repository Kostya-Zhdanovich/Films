import { IFilm } from "../../../types";
import { favFilmsActionsEnum } from "./favFilmsActions";

const defaultState = {
  favFilms: [],
};

interface favFilmsAction {
  type: favFilmsActionsEnum;
  payload: IFilm;
}

export const favFilmsReducer = (
  state = defaultState,
  action: favFilmsAction
) => {
  switch (action.type) {
    case favFilmsActionsEnum.ADD_TO_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      newfavFilmsArr.push(action.payload);

      return { ...state, favFilms: newfavFilmsArr };
    }
    case favFilmsActionsEnum.REMOVE_FROM_FAVS: {
      const newfavFilmsArr: IFilm[] = [...state.favFilms];
      const filteredArr = newfavFilmsArr.filter((film) => film.imdbID !== action.payload.imdbID);

      return { ...state, favFilms: filteredArr };
    }
    default:
      return state;
  }
};
