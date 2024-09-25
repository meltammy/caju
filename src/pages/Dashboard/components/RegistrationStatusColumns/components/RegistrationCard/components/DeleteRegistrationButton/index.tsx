import { HiOutlineTrash } from "react-icons/hi";
import { useConfirmationModalContext } from "../../../ConfirmationModalContext/useConfirmationModalContext";
import { StyledIconButton } from "./styles";

type Props = {
  id: string;
};

export function DeleteRegistrationButton({ id }: Props) {
  const { setConfirmationModalProps } = useConfirmationModalContext();

  function onClick() {
    setConfirmationModalProps({ deleteRegistrationProps: { id } });
  }

  return (
    <StyledIconButton onClick={onClick} color="primary">
      <HiOutlineTrash />
    </StyledIconButton>
  );
}
