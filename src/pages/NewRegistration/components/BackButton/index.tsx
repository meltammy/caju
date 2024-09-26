import { HiOutlineArrowLeft } from "react-icons/hi";
import { IconButton } from "~/components/Buttons/IconButton";
import { useHistory } from "react-router-dom";
import routes from "~/router/routes";

export const BackButton = () => {
  const history = useHistory();

  const goToHome = () => {
    history.push(routes.dashboard);
  };

  return (
    <IconButton onClick={goToHome} aria-label="back">
      <HiOutlineArrowLeft size={24} />
    </IconButton>
  );
};
