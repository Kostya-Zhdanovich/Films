import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { themeReducer } from "./Theme/themeReducer";
import { userReducer } from "./User/userReducer";
import { favFilmsReducer } from "./Films/FavFilms/favFilmsReducer";
import { filmsReducer } from "./Films/filmsReducer";
import { filterMenuReducer } from "./FilterMenu/filterMenuReducer";
import { sectionsReducer } from "./Sections/sectionsReducer";
import { filtersReducer } from "./Filters/filtersReducer";
import { fullFilmReducer } from "./Films/FullFilm/fullFilmReducer";


const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  favFilms: favFilmsReducer,
  films: filmsReducer,
  filterMenu: filterMenuReducer,
  sections: sectionsReducer,
  filters: filtersReducer,
  film: fullFilmReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;