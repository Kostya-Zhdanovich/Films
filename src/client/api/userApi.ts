import { userUrl } from "../utils/https";
import { IUserData } from "../../types";

export interface IResetPasswordConfirmData {
  uid: string;
  token: string;
  new_password: string;
}

export const userApi = {
  
  signUp: (userData: IUserData) => userUrl.post(`/auth/users/`, { ...userData }),

  activateAccount: (uid: string, token: string) => userUrl.post("/auth/users/activation/", { uid, token }),

  getTokens: (email: string, password: string) => userUrl.post("/auth/jwt/create/", { email, password }),

  verifyToken: (token: string) => userUrl.post("/auth/jwt/verify/", { token }),

  refreshToken: (refresh: string) => userUrl.post("/auth/jwt/refresh/", { refresh }),

  signIn: (token: string) => userUrl.get("/auth/users/me/", {
      headers: { Authorization: `Bearer ${token}` },
    }),
  
};


