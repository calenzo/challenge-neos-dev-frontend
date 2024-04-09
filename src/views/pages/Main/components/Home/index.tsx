import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { ILinkResponse } from "application/@types";
import { Button, Input } from "views/components";

import * as Styled from "./styles";
import { deleteLinkService, getListLinks, onSubmit } from "./services";
import { initialValues, formModel, validationSchema } from "./constants";

export const Home = () => {
  const [links, setLinks] = useState<ILinkResponse[]>([]);
  const [updateLinks, setUpdateLinks] = useState<boolean>(false);

  const handleUpdateListLinks = () => {
    setUpdateLinks(false);
  };

  const { values, handleChange, submitForm, isSubmitting, isValid, dirty } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, formikHelpers) =>
        onSubmit({
          values,
          formikHelpers,
          callbackSuccess: handleUpdateListLinks,
        }),
      validateOnMount: true,
    });

  useEffect(() => {
    if (!updateLinks) {
      getListLinks({
        setLinks,
      });
      setUpdateLinks(true);
    }
  }, [updateLinks]);

  return (
    <Styled.Container>
      <Styled.NewLink>
        <Styled.NewLinkTitle>Gerar novo link</Styled.NewLinkTitle>

        <Styled.NewLinkForm>
          <Input
            name={formModel.phone_number.name}
            label={formModel.phone_number.label}
            value={values[formModel.phone_number.name]}
            onChange={handleChange}
            width="300px"
          />
          <Input
            name={formModel.message.name}
            label={formModel.message.label}
            value={values[formModel.message.name]}
            onChange={handleChange}
            width="300px"
          />

          <Button
            disable={isSubmitting || !isValid || !dirty}
            onClick={submitForm}
          >
            Gerar
          </Button>
        </Styled.NewLinkForm>
      </Styled.NewLink>

      <Styled.List>
        <Styled.ListTitle>Lista de links gerados</Styled.ListTitle>

        {links.map((link, index) => (
          <Styled.ListItem key={link.id}>
            <Styled.ListItemDelete
              onClick={() =>
                deleteLinkService({
                  linkId: link.id,
                  callbackSuccess: handleUpdateListLinks,
                })
              }
            >
              X
            </Styled.ListItemDelete>
            <Styled.ListItemContainer>
              Link {index + 1}:{" "}
              <Styled.ListItemLink
                href={link.url}
                target="_blank"
              >{`${link.url}`}</Styled.ListItemLink>
            </Styled.ListItemContainer>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};
