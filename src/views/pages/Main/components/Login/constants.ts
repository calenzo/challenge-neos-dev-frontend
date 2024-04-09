import { object, string } from "yup";

export const formModel = {
  username: {
    label: "Usuário",
    name: "username",
  },
  password: {
    label: "Senha",
    name: "password",
  },
};

export const initialValues = {
  [formModel.username.name]: "",
  [formModel.password.name]: "",
};

export const validationSchema = object().shape({
  [formModel.username.name]: string().required(),
  [formModel.password.name]: string().required(),
});
