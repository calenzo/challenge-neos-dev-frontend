import { FormikHelpers, FormikValues } from "formik";

import { OAuth } from "infrastructure/services";

export const onSubmit = async ({
  values,
  formikHelpers,
  callbackSuccess,
}: {
  values: FormikValues;
  formikHelpers: FormikHelpers<FormikValues>;
  callbackSuccess: () => void;
}) => {
  formikHelpers.setSubmitting(true);

  OAuth.authenticateUser({
    username: values.username,
    password: values.password,
    setUser: () => {},
    callbackSuccess: (response) => {
      callbackSuccess();
      formikHelpers.setSubmitting(false);
      console.log("response", response);
    },
    callbackError: () => {
      formikHelpers.setSubmitting(false);
    },
  });
};
