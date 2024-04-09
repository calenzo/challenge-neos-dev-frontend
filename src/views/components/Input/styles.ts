import styled from "styled-components";

export const Container = styled.div<{ width: string; hide?: boolean }>`
  width: ${({ width }) => width};
  text-align: left;
  display: ${({ hide }) => (hide ? "none" : "flex")};
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 10px;
  color: ${({ theme: { primary } }) => primary.background};
  font-size: 12px;
  line-height: 18px;
`;

export const Element = styled.input`
  background-color: transparent;
  width: calc(100% - 10px);
  height: 45px;
  padding-left: 10px;
  color: ${({ theme: { primary } }) => primary.background};
  border: 0;
  border-radius: 0;
  -webkit-appearance: none;
  border-bottom: 1px solid ${({ theme: { primary } }) => primary.background};

  textarea:focus,
  &:focus {
    outline: none;
  }
`;
