import * as Styled from "./styles";
import { ILayoutModal } from "./@types";

export const LayoutModal = ({
  children,
  openModal,
  closeModal,
  ...restProps
}: ILayoutModal) => (
  <Styled.Container openModal={openModal} onClick={closeModal} {...restProps}>
    <Styled.Modal onClick={(event) => event.stopPropagation()} {...restProps}>
      {children}
    </Styled.Modal>
  </Styled.Container>
);
