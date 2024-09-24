import * as S from "./styles";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";
import { NewRegistrationForm } from "./components/NewRegistrationForm";

const NewRegistration = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={goToHome} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <NewRegistrationForm />
      </S.Card>
    </S.Container>
  );
};

export default NewRegistration;
