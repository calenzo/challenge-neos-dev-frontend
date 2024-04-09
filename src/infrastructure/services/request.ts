import axios from "axios";

import { Config } from "application/constant";

const { STAGE } = Config;

const client = axios.create({
  timeout: 5000,
});

export const getToken = () => localStorage.getItem("token");

client.interceptors.request.use(
  (config) => {
    if (!config?.url?.startsWith(`${STAGE.BASE_URL}/auth`)) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const hasError =
      !!error.response && !!error.response.data && !error.response.data.success;

    if (hasError) return error.response.data;

    return error;
  }
);

export default client;
