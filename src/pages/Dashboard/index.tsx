import { RegistrationStatusColumns } from "./components/RegistrationStatusColumns";
import * as S from "./styles";
import { SearchBar } from "./components/SearchBar";
import { WelcomeModal } from "~/components/Modals/WelcomeModal";

const DashboardPage = () => {
  return (
    <>
      <WelcomeModal />
      <S.Container>
        <SearchBar />
        <RegistrationStatusColumns />
      </S.Container>
    </>
  );
};

export default DashboardPage;
