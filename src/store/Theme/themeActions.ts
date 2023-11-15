import { themeModes } from "../../styles/theme";

export enum themeActionsEnum {
  CHANGE_THEME = "CHANGE_THEME",
}

export const themeActions = {
  changeTheme: (payload: themeModes) => {
    return { type: themeActionsEnum.CHANGE_THEME, payload };
  },
};
