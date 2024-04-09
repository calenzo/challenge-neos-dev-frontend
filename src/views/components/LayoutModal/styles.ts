import styled from "styled-components";
import { IStyledContainer } from "./@types";

export const Container = styled.div<IStyledContainer>`
  visibility: ${(props) => (props.openModal ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.openModal ? "auto" : "none")};
  opacity: ${(props) => (props.openModal ? 1 : 0)};
  width: 100%;
  height: 100vh;
  background-color: ${({ background }) => background || "#00000080"};
  z-index: 999;
  position: fixed;
  padding: ${({ padding }) => padding ?? "30px"};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  overflow: ${({ overFlow }) => overFlow || "auto"};

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    padding: ${({ paddingMobile }) => paddingMobile};
  }
`;

export const Modal = styled.div<{ disableBoxShadow?: boolean }>`
  background-color: ${({ theme: { primary } }) => primary.color};
  border-radius: 8px;
  box-shadow: ${({ disableBoxShadow }) =>
    !disableBoxShadow ? "-1px 1px 4px rgba(0, 0, 0, 0.35)" : "none"};
  margin: auto;
`;

export const MobileHeaderContainer = styled.div`
  display: none;

  @media (max-width: ${({ theme: { media } }) => media.tablet_portrait}) {
    display: block;
  }
`;
