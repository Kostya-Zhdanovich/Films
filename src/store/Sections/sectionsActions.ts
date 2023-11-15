import { sectionsEnum } from "../../types";

export enum sectionsActionsEnum {
  CHANGE_SECTION = "CHANGE_SECTION",
}

export const sectionsActions = {
  changeSection: (payload: sectionsEnum) => {
    return { type: sectionsActionsEnum.CHANGE_SECTION, payload };
  },
};
