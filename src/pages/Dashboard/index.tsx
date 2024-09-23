import { RegistrationStatusColumns } from "./components/RegistrationStatusColumns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { RegistrationsProvider } from "./components/RegistrationsContext/RegistrationsProvider";

const DashboardPage = () => {
  return (
    <RegistrationsProvider>
      <S.Container>
        <SearchBar />
        <RegistrationStatusColumns />
      </S.Container>
    </RegistrationsProvider>
  );
};

export default DashboardPage;
