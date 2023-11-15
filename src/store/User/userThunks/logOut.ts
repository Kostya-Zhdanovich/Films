import { Dispatch } from "redux";
import { userActions } from "../userActions";

export const logOut = () => {
  return async (dispatch: Dispatch) => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    dispatch(userActions.signOut());
  };
};
