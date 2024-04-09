import styled from "styled-components";

export const ButtonElement = styled.button`
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 5px 15px;

  background-color: ${({ theme }) => theme.primary.background};
  color: ${({ theme }) => theme.primary.color};
  border: none;

  &:disabled {
    cursor: not-allowed;
    border: none;
    opacity: 0.4;
  }
`;
