import { filterMenuActionsEnum } from "./filterMenuActions";

const defaultState = {
  filterMenuIsOpened: false,
};

interface IAction {
  type: filterMenuActionsEnum;
  payload: boolean;
}

export const filterMenuReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case filterMenuActionsEnum.OPEN_MENU: {
      return { ...state, filterMenuIsOpened: true };
    }

    case filterMenuActionsEnum.CLOSE_MENU: {
      return { ...state, filterMenuIsOpened: false };
    }

    default:
      return state;
  }
};
