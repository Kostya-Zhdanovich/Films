import { userApi } from "../../../client/api/userApi";

export const getTokens = async (email: string, password: string) => {
  const res = await userApi.getTokens(email, password);
  return res?.data;
};

export const signIn = async (token: string) => {
  const res = await userApi.signIn(token);
  return res?.data;
};

export const isTokenValid = async (token: string) => {
    const res = await userApi.verifyToken(token);
    return res?.status === 200;
  };
  
  export const refreshAccessToken = async (token: string) => {
      const res = await userApi.refreshToken(token)
      return res?.data;
  }
  