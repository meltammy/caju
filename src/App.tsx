import Router from "~/router";
import { Header } from "./components/Header";
import { ToastProvider } from "./components/Toast";

function App() {
  return (
    <>
      <Header>
        <h1>Caju Front Teste [deploy test 2]</h1>
      </Header>
      <ToastProvider>
        <Router />
      </ToastProvider>
    </>
  );
}

export default App;
