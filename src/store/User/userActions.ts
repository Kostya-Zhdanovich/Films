import { IUserData } from "../../types";

export enum userActionsEnum {
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",
  SIGN_OUT = "SIGN_OUT",
  RESET_PASSWORD = "RESET_PASSWORD",
}

export const userActions = {
  signUp: (payload: IUserData) => {
    return { type: userActionsEnum.SIGN_UP, payload };
  },
  signIn: (payload: IUserData) => {
    return { type: userActionsEnum.SIGN_IN, payload };
  },
  signOut: () => {
    return { type: userActionsEnum.SIGN_OUT, payload: null };
  },
  resetPassword: (payload: string) => {
    return { type: userActionsEnum.RESET_PASSWORD, payload };
  },
};
