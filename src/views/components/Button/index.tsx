import * as Styled from "./styles";
import { IButton } from "./@types";

const Button = ({
  onClick,
  children,
  disable,
  ...restProps
}: IButton) => (
  <Styled.ButtonElement onClick={onClick} disabled={disable} {...restProps}>
    {children}
  </Styled.ButtonElement>
);
export { Button };
