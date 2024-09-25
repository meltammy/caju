import Router from "~/router";
import { Header } from "./components/Header";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globals";
import { ToastProvider } from "./components/Toast/ToastProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ToastProvider>
        <Router />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
