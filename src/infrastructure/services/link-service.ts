/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILinkPayload } from "application/@types";
import { deleteService, getService, postService } from "./api";

export const getLinks = async ({
  callbackSuccess,
  callbackError,
}: {
  callbackSuccess: (response: any) => void;
  callbackError?: () => void;
}) => {
  const response = await getService("link")
    .then(callbackSuccess)
    .catch(callbackError);
  return response;
};

export const createLink = async ({
  payload,
  callbackSuccess = () => {},
  callbackError = () => {},
}: {
  payload: ILinkPayload;
  callbackSuccess: () => void;
  callbackError?: () => void;
}) => {
  const response = await postService("link", {
    ...payload,
  })
    .then(callbackSuccess)
    .catch(callbackError);
  return response;
};

export const deleteLink = async ({
  linkId,
  callbackSuccess,
  callbackError,
}: {
  linkId: number;
  callbackSuccess: () => void;
  callbackError?: () => void;
}) => {
  const response = await deleteService(`link/${linkId}`)
    .then(callbackSuccess)
    .catch(callbackError);
  return response;
};
