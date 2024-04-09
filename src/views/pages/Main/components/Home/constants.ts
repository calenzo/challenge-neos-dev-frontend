import { object, string } from "yup";

export const formModel = {
  phone_number: {
    label: "WhatsApp*",
    name: "phone_number",
  },
  message: {
    label: "Sua Mensagem (opcional)",
    name: "message",
  },
};

export const initialValues = {
  [formModel.phone_number.name]: "",
  [formModel.message.name]: "",
};

export const validationSchema = object().shape({
  [formModel.phone_number.name]: string().required(),
  [formModel.message.name]: string().required(),
});
