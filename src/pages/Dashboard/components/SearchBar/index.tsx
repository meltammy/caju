import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons/Button";
import routes from "~/router/routes";
import * as S from "./styles";
import { CpfSearchField } from "./components/CpfSearchField";
import { RefetchButton } from "./components/RefetchButton";
import { useRegistrationsContext } from "~/components/RegistrationsContext/useRegistrationsContext";

export const SearchBar = () => {
  const { refetch } = useRegistrationsContext();
  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  return (
    <S.Container>
      <CpfSearchField />
      <S.Actions>
        <RefetchButton refetch={refetch} />
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
