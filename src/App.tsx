import Router from "~/router";
import { Header } from "./components/Header";
import { ToastProvider } from "./components/Toast";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <h1>Caju Front Teste [deploy test 2]</h1>
      </Header>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
