/* eslint-disable @typescript-eslint/no-explicit-any */
import { getService, postService } from "./api";

export const getUser = async () => {
  const response = await getService("user");
  return response;
};

export const registerUser = async ({
  user,
  callbackSuccess = () => {},
  callbackError = () => {},
}: {
  user: { username: string; password1: string; password2: string };
  callbackSuccess: (_: any) => void;
  callbackError: (_: any) => void;
}) => {
  const response = await postService("user", {
    ...user,
  })
    .then(callbackSuccess)
    .catch(callbackError);
  return response;
};

export const logoutUser = async () => {
  localStorage.removeItem("token");
  return;
};
