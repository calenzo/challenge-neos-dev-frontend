export enum ISTAGE {
  local = "local",
  development = "development",
  production = "production",
}

const STAGE = {
  local: {
    BASE_URL: "http://0.0.0.0:8000",
  },
  development: {
    BASE_URL: "https://challenge-neos-dev-backend.onrender.com",
  },
  production: {
    BASE_URL: "",
  },
};

const Config = {
  ROUTES: {
    LINK: "link",
    USER: "user",
  },
  // STAGE:
  //   STAGE[process?.env?.REACT_APP_ENV as ISTAGE] ??
  //   STAGE[process?.env.NODE_ENV as ISTAGE],
  STAGE: STAGE.development,
};

export { Config };
