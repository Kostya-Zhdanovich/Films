import { sectionsEnum } from "../../types";
import { sectionsActionsEnum } from "./sectionsActions";

const defaultState = {
  section: sectionsEnum.HOME,
};

interface IAction {
  type: sectionsActionsEnum;
  payload: sectionsEnum;
}

export const sectionsReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case sectionsActionsEnum.CHANGE_SECTION: {
      return { ...state, section: action.payload };
    }

    default:
      return state;
  }
};
