import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.primary.background};
    color: ${({ theme }) => theme.primary.color};
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
  }
`;

export default GlobalStyle;
