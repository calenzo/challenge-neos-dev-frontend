import { useFormik } from "formik";

import { Button, Input, LayoutModal } from "views/components";

import * as Styled from "./styles";
import { ILogin } from "./@types";
import { onSubmit } from "./services";
import { initialValues, formModel, validationSchema } from "./constants";

export const Login = ({
  openModal,
  callbackSuccess,
  redirectRegister,
}: ILogin) => {
  const { values, handleChange, submitForm, isSubmitting, isValid, dirty } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, formikHelpers) =>
        onSubmit({ values, formikHelpers, callbackSuccess }),
      validateOnMount: true,
    });

  return (
    <LayoutModal openModal={openModal}>
      <Styled.Form>
        <Input
          name={formModel.username.name}
          label={formModel.username.label}
          value={values[formModel.username.name]}
          onChange={handleChange}
          width="300px"
        />
        <Input
          name={formModel.password.name}
          label={formModel.password.label}
          value={values[formModel.password.name]}
          onChange={handleChange}
          width="300px"
        />

        <Styled.WrapperButtons>
          <Button onClick={redirectRegister}>Castrastro</Button>
          <Button
            onClick={submitForm}
            disable={isSubmitting || !isValid || !dirty}
          >
            Entrar
          </Button>
        </Styled.WrapperButtons>
      </Styled.Form>
    </LayoutModal>
  );
};
