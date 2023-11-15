import { userApi } from "../../../client/api/userApi";
import { Dispatch } from "redux";



const activateAccount = async (uid: string, token: string) => {
  const res = await userApi.activateAccount(uid, token);
  return res?.data;
};


export const activateAccountAsync = async (
  uid: string,
  token: string,
) => {
  
  try {
    const isActivated = await activateAccount(uid, token);
  } catch (error) {
    console.log("Error");
  }

};
