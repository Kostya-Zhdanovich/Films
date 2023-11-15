import { IState } from "../../types";


export const selectors = {
  getFavFilms: (state: IState) => state.favFilms.favFilms,
  getFilms: (state: IState) => state.films,
  getFilterMenuIsOpened: (state: IState) => state.filterMenu.filterMenuIsOpened,
  getFilters: (state: IState) => state.filters,
  getSection: (state: IState) => state.sections.section,
  getThemeMode: (state: IState) => state.theme.themeMode,
  getUserInfo: (state: IState) => state.user.user,
  getFullFilm: (state: IState) => state.film.film
};
