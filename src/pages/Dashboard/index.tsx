import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { SearchRegistrationProvider } from "./components/SearchRegistrationContext/SearchRegistrationProvider";

const DashboardPage = () => {
  return (
    <SearchRegistrationProvider>
      <S.Container>
        <SearchBar />
        <Collumns />
      </S.Container>
    </SearchRegistrationProvider>
  );
};

export default DashboardPage;
