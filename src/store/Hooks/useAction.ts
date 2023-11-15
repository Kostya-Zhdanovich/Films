import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { favFilmsActions } from "../Films/FavFilms/favFilmsActions";
import { filmsActions } from "../Films/filmsActions";
import { themeActions } from "../Theme/themeActions";
import { userActions } from "../User/userActions";
import { filterMenuActions } from "../FilterMenu/filterMenuActions";
import { setFilmsAsync } from "../Films/setFilmsAsync";
import { sectionsActions } from "../Sections/sectionsActions";
import { filtersACtions } from "../Filters/filtersActions";
import { setFilteredFilmsAsync } from "../Films/FilteredFilms/setFilteredFilmsAsync";
import { setSearchedFilmsAsync } from "../Films/SearchedFilms/setSearchedFilmsAsync";
import { fullFilmActions } from "../Films/FullFilm/fullFilmActions";
import { setFullFilmAsync } from "../Films/FullFilm/setFullFilmAsync";
import { signUpAsync } from "../User/userThunks/signUpAsync";
import { signInAsync } from "../User/userThunks/signInAsync";
import { autoAuthAsync } from "../User/userThunks/autoAuthAsync";
import { activateAccountAsync } from "../User/userThunks/activateAccountAsync";
import { logOut } from "../User/userThunks/logOut";


export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...favFilmsActions,
      ...filmsActions,
      ...themeActions,
      ...userActions,
      ...filterMenuActions,
      ...sectionsActions,
      ...filtersACtions,
      ...fullFilmActions,
      setFilmsAsync,
      setFilteredFilmsAsync,
      setSearchedFilmsAsync,
      setFullFilmAsync,
      signUpAsync,
      signInAsync,
      autoAuthAsync,
      activateAccountAsync,
      logOut,
    },
    dispatch
  );
};
