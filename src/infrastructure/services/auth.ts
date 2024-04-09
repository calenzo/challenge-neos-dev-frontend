/* eslint-disable @typescript-eslint/no-explicit-any */
import { getService, postService } from "./api";

const authenticateUser = async ({
  username,
  password,
  setUser,
  callbackSuccess = () => {},
  callbackError = () => {},
}: {
  username: string;
  password: string;
  setUser: (data?: any) => void;
  callbackSuccess: (data?: any) => void;
  callbackError?: (data?: any) => void;
}) => {
  await postService("auth", {
    username,
    password,
  })
    .then(async (response: any) => {
      if (response?.token) {
        localStorage.setItem("token", response?.token);

        await getService("user")
          .then((res) => {
            setUser({
              ...res,
              token: response?.token,
            });
            callbackSuccess(response);
          })
          .catch(callbackError);
      } else {
        callbackError(response);
      }
    })
    .catch(callbackError);
};

const isAuthenticated = async ({
  setUser,
}: {
  setUser: (data?: any) => void;
}) =>
  getService("user").then((res: any) => {
    if (res?.success) {
      setUser(res);
    }
    return !!res?.success;
  });

export const OAuth = {
  authenticateUser,
  isAuthenticated,
};
