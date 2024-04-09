/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikHelpers, FormikValues } from "formik";

import { registerUser } from "infrastructure/services";

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

  await registerUser({
    user: {
      username: values.username,
      password1: values.password,
      password2: values.confirmPassword,
    },
    callbackSuccess: (response: any) => {
      if (response?.success) {
        callbackSuccess();
      }
      formikHelpers.setSubmitting(false);
    },
    callbackError: () => {
      formikHelpers.setSubmitting(false);
    },
  });
};
