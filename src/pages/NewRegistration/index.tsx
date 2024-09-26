import * as S from "./styles";
import { CreateRegistrationForm } from "./components/CreateRegistrationForm";
import { BackButton } from "./components/BackButton";

const CreateRegistration = () => {
  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <BackButton />
          <h2>Criar nova admissão</h2>
        </S.CardHeader>

        <CreateRegistrationForm />
      </S.Card>
    </S.Container>
  );
};

export default CreateRegistration;
