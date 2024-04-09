import { useState } from "react";

import { IModals } from "./@types";
import { Home, Login, Register } from "./components";
import { initialValuesModals } from "./constants";

export const Main = () => {
  const [modals, setModals] = useState<IModals>(initialValuesModals);

  const handle = {
    openHome: () => {
      setModals({
        login: false,
        register: false,
        home: true,
      });
    },
    openRegister: () => {
      setModals({
        login: false,
        register: true,
        home: false,
      });
    },
    openLogin: () => {
      setModals({
        login: true,
        register: false,
        home: false,
      });
    },
  };

  return (
    <>
      {modals.home && <Home />}

      {modals.login && (
        <Login
          openModal={modals.login}
          callbackSuccess={handle.openHome}
          redirectRegister={handle.openRegister}
        />
      )}

      {modals.register && (
        <Register
          openModal={modals.register}
          redirectLogin={handle.openLogin}
          callbackSuccess={handle.openHome}
        />
      )}
    </>
  );
};
