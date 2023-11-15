import { IFilters } from "../../types";

export enum filtersACtionsEnum {
  CHANGE_FILTERS = "CHANGE_FILTERS",
  CLEAR_FILTERS = "CLEAR_FILTERS",
}


export const filtersACtions = {
  changeFilters: (payload: Partial<IFilters>) => {
    return { type: filtersACtionsEnum.CHANGE_FILTERS, payload };
  },
  clearFilters: () => {
    return { type: filtersACtionsEnum.CLEAR_FILTERS, payload: null };
  },
};
