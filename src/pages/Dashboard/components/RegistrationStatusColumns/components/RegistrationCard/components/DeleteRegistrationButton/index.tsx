import { HiOutlineTrash } from "react-icons/hi";
import { useConfirmationModalContext } from "../../../ConfirmationModalContext/useConfirmationModalContext";

type Props = {
  id: string;
};

export function DeleteRegistrationButton({ id }: Props) {
  const { setConfirmationModalProps } = useConfirmationModalContext();

  function onClick() {
    setConfirmationModalProps({ deleteRegistrationProps: { id } });
  }

  return <HiOutlineTrash onClick={onClick} />;
}
