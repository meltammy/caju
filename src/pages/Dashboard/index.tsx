import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useGetRegistrations } from "~/hooks/useFetch/useGetRegistrations";

const DashboardPage = () => {
  const {data} = useGetRegistrations()

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={data} />
    </S.Container>
  );
};
export default DashboardPage;
