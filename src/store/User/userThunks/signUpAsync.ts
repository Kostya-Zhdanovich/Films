import { Dispatch } from "redux";
import { userApi } from "../../../client/api/userApi";
import { IUserData } from "../../../types";
import { userActions } from "../userActions";

const signUp = async (userData: IUserData) => {
  const res = await userApi.signUp(userData);
  return res?.data;
};

export const signUpAsync = (userData: IUserData) => {
  return async (dispatch: Dispatch) => {
    try {
      const isSignedUp = await signUp(userData);
      if (isSignedUp) dispatch(userActions.signUp(userData));
    } catch (error) {}
  };
};
