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

  await OAuth.authenticateUser({
    username: values.username,
    password: values.password,
    setUser: () => {},
    callbackSuccess: () => {
      callbackSuccess();
      formikHelpers.setSubmitting(false);
    },
    callbackError: () => {
      formikHelpers.setSubmitting(false);
    },
  });
};
