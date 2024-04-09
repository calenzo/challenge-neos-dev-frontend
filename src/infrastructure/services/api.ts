/* eslint-disable @typescript-eslint/no-explicit-any */
import request from "./request";

import { Config } from "application/constant";

const { STAGE } = Config;

const configHeaderJSON = { headers: { "content-type": "application/json" } };

export const getService = async (path: string, params?: any) => {
  const url = `${STAGE.BASE_URL}/${path}`;

  if (params) params = { ...params };

  return await request.get(url, { params });
};

export const postService = async (path: string, body: any) => {
  const url = `${STAGE.BASE_URL}/${path}`;
  return await request.post(url, body, configHeaderJSON);
};

export const deleteService = async (path: string) => {
  const url = `${STAGE.BASE_URL}/${path}`;
  return await request.delete(url, configHeaderJSON);
};

export const putService = async (path: string, body: any) => {
  const url = `${STAGE.BASE_URL}/${path}`;
  return await request.put(url, body, configHeaderJSON);
};
