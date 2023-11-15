import { Dispatch } from "redux";
import { userActions } from "../userActions";
import {
  isTokenValid,
  refreshAccessToken,
  signIn,
} from "./helpers";

export const autoAuthAsync = () => {
  return async (dispatch: Dispatch) => {
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      const parsedAccessToken = JSON.parse(accessToken);

      try {
        const validationOfToken = await isTokenValid(parsedAccessToken);

        if (validationOfToken) {
          try {
            const userData = await signIn(parsedAccessToken);
            dispatch(userActions.signIn(userData));
          } catch (error) {
            console.log(error);
          }
        }
      } catch (error) {
        try {
          const refreshToken = localStorage.getItem("refresh");

          if (refreshToken) {
            try {
              const { access } = await refreshAccessToken(
                JSON.parse(refreshToken)
              );

              localStorage.setItem("access", JSON.stringify(access));

              autoAuthAsync();
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return {};
    }
  };
};
