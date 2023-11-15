export enum filterMenuActionsEnum {
  OPEN_MENU = "OPEN_MENU",
  CLOSE_MENU = "CLOSE_MENU",
}

export const filterMenuActions = {
  openFilterMenu: () => {
    return { type: filterMenuActionsEnum.OPEN_MENU, payload: true };
  },
  closeFilterMenu: () => {
    return { type: filterMenuActionsEnum.CLOSE_MENU, payload: false };
  },
};
