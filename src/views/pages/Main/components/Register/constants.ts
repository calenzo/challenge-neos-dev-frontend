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
  confirmPassword: {
    label: "Confirmar Senha",
    name: "confirmPassword",
  },
};

export const initialValues = {
  [formModel.username.name]: "",
  [formModel.password.name]: "",
  [formModel.confirmPassword.name]: "",
};

export const validationSchema = object().shape({
  [formModel.username.name]: string().required(),
  [formModel.password.name]: string().required(),
  [formModel.confirmPassword.name]: string().required(),
});
