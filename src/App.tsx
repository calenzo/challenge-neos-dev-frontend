import { ThemeProvider } from "styled-components";

import { Main } from "./views/pages";

import Theme from "./views/styles/theme";
import GlobalStyle from "./views/styles/globalStyles";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Main />
  </ThemeProvider>
);
export default App;
