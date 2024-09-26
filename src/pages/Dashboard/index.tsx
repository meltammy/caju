import { RegistrationStatusColumns } from "./components/RegistrationStatusColumns";
import * as S from "./styles";
import { SearchBar } from "./components/SearchBar";
import { RegistrationsProvider } from "./components/RegistrationsContext/RegistrationsProvider";
import { WelcomeModal } from "~/components/Modals/WelcomeModal";

const DashboardPage = () => {
  return (
    <RegistrationsProvider>
      <WelcomeModal />
      <S.Container>
        <SearchBar />
        <RegistrationStatusColumns />
      </S.Container>
    </RegistrationsProvider>
  );
};

export default DashboardPage;
