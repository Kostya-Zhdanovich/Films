import {
  ISetFilmsPayload,
  filmsActionsEnum,
} from "./filmsActions";
import { getFilmsObject } from "../helpers";

interface IFilmsAction {
  type: filmsActionsEnum;
  payload: ISetFilmsPayload;
}

const initialState = {
  filmsObject: { arrayOfFilmsList: [], remnant: [] },
  totalResults: 0,
  searchTitle: "",
};

export const filmsReducer = (state = initialState, action: IFilmsAction) => {
  const { apiFilmsResponse = { Search: [], totalResults: 0 }, filmsPerList, searchTitle } = action.payload || {};


  switch (action.type) {
    case filmsActionsEnum.SET_FILMS:
    case filmsActionsEnum.SET_NEW_FILMS: {
      const filmsArr = apiFilmsResponse.Search;
      const newFilmsObject = getFilmsObject(filmsArr, filmsPerList);

      return {
        ...state,
        filmsObject: newFilmsObject,
        totalResults: +apiFilmsResponse.totalResults,
        searchTitle: "",
      };
    }

    case filmsActionsEnum.SEARCH_FILMS: {
      const filmsArr = apiFilmsResponse.Search;

      if (!apiFilmsResponse.totalResults) {
        return { ...initialState, searchTitle };
      }

      const filmsObject = searchTitle !== state.searchTitle
        ? getFilmsObject(filmsArr, filmsPerList)
        : getFilmsObject(filmsArr, filmsPerList, state.filmsObject);

      return {
        ...state,
        filmsObject,
        totalResults: +apiFilmsResponse.totalResults,
        searchTitle,
      };
    }

    default:
      return state;
  }
};
