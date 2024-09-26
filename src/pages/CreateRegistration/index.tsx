import * as S from "./styles";
import { CreateRegistrationForm } from "./components/CreateRegistrationForm";
import { BackButton } from "./components/BackButton";

const CreateRegistration = () => {
  return (
    <S.Container>
      <S.Card>
        <S.CardHeader>
          <BackButton />
          <S.Title>Criar nova admissão</S.Title>
        </S.CardHeader>
        <CreateRegistrationForm />
      </S.Card>
    </S.Container>
  );
};

export default CreateRegistration;
