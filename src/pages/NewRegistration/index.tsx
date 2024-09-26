import * as S from "./styles";
import { NewRegistrationForm } from "./components/NewRegistrationForm";
import { BackButton } from "./components/BackButton";

const NewRegistration = () => {
  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <BackButton />
          <h2>Criar nova admissão</h2>
        </S.CardHeader>

        <NewRegistrationForm />
      </S.Card>
    </S.Container>
  );
};

export default NewRegistration;
