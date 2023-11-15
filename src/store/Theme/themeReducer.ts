import { themeActionsEnum } from "./themeActions";
import { themeModes } from "../../styles/theme";

const defaultState = {
  themeMode: themeModes.DARK_MODE,
};

interface IThemeAction {
  type: themeActionsEnum;
  payload: themeModes;
}

export const themeReducer = (state = defaultState, action: IThemeAction) => {
  switch (action.type) {
    case themeActionsEnum.CHANGE_THEME:
      return { ...state, themeMode: action.payload };
    default:
      return state;
  }
};
