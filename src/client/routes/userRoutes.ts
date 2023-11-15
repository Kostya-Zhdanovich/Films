import ErrorPage from "../../pages/404/404";
import FavFilmsPage from "../../pages/FavFilmsPage/FavFilmsPage";
import FilmPage from "../../pages/FullFilmPage/FullFilmPage";
import MainPage from "../../pages/MainPage/MainPage";
import SettingsPage from "../../pages/SettingsPage/SettingsPage";
import ActivateAccountPage from "../../pages/RegistrationPages/ActivateAccountPage";
import SignInPage from "../../pages/RegistrationPages/SignInPage";
import SignUpPage from "../../pages/RegistrationPages/SignUpPage";

interface IClientRoutes {
  id: number;
  path: string;
  Component: React.FC<any>;
  props?: any;
  isPrivate: boolean;
}

export const clientRoutes: IClientRoutes[] = [
  {
    id: 1,
    path: "/main",
    Component: MainPage,
    isPrivate: false,
  },
  {
    id: 2,
    path: "/favourites",
    Component: FavFilmsPage,
    isPrivate: true,
  },
  {
    id: 3,
    path: "/film/:id",
    Component: FilmPage,
    isPrivate: false,
  },
  {
    id: 4,
    path: "/sign-up",
    Component: SignUpPage,
    isPrivate: false,
  },
  {
    id: 5,
    path: "/activate-account",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 6,
    path: "/activate-account/:uid/:token",
    Component: ActivateAccountPage,
    isPrivate: false,
  },
  {
    id: 7,
    path: "/sign-in",
    Component: SignInPage,
    isPrivate: false,
  },
  {
    id: 8,
    path: "/settings",
    Component: SettingsPage,
    isPrivate: true,
  },
  {
    id: 100,
    path: "/error",
    Component: ErrorPage,
    isPrivate: false,
  },
];
