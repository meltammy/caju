import { HiOutlineTrash } from "react-icons/hi";
import { StyledIconButton } from "./styles";
import { useConfirmationModalContext } from "~/pages/Dashboard/components/ConfirmationModals/ConfirmationModalContext/useConfirmationModalContext";

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
