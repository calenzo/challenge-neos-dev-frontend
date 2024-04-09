import { FormikHelpers, FormikValues } from "formik";

import { ILinkPayload, ILinkResponse } from "application/@types";
import { getLinks, createLink, deleteLink } from "infrastructure/services";

export const onSubmit = async ({
  values,
  formikHelpers,
  callbackSuccess,
}: {
  values: FormikValues;
  formikHelpers: FormikHelpers<FormikValues>;
  callbackSuccess: () => void;
}) => {
  const payload: ILinkPayload = {
    phone_number: values.phone_number,
    message: values?.message ?? "",
  };

  createLink({
    payload,
    callbackSuccess: () => {
      formikHelpers.resetForm();
      callbackSuccess();
    },
  });
};

export const getListLinks = async ({
  setLinks,
}: {
  setLinks: React.Dispatch<React.SetStateAction<ILinkResponse[]>>;
}) => {
  const callbackSuccess = (response: { list: ILinkResponse[] }) => {
    setLinks(response?.list);
  };

  getLinks({ callbackSuccess });
};

export const deleteLinkService = async ({
  linkId,
  callbackSuccess,
}: {
  linkId: number;
  callbackSuccess: () => void;
}) => {
  deleteLink({
    linkId,
    callbackSuccess,
  });
};
