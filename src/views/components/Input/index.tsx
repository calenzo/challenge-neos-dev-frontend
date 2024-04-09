import { IInput } from "./@types";
import * as Styled from "./styles";

const Input = ({
  id,
  name,
  type = "text",
  onChange,
  label = "",
  value,
  width = "100%",
  ...rest
}: IInput) => (
  <Styled.Container width={width} {...rest}>
    {!!value && <Styled.Label htmlFor={id}>{label}</Styled.Label>}
    <Styled.Element
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={label}
    />
  </Styled.Container>
);

export { Input };
