import { RegistrationStatus } from "~/types";
import { ButtonStatus } from "./styles";
import { useConfirmationModalContext } from "../../../ConfirmationModalContext/useConfirmationModalContext";

const labelMapper = {
  [RegistrationStatus.Approved]: "Aprovar",
  [RegistrationStatus.Reproved]: "Reprovar",
  [RegistrationStatus.Review]: "Revisar novamente",
};

type Props = {
  status: RegistrationStatus;
  id: string;
};

export function ChangeRegistrationStatusButton({ status, id }: Props) {
  const { setConfirmationModalProps } = useConfirmationModalContext();

  function onClick() {
    setConfirmationModalProps({ changeStatusProps: { status, id } });
  }

  return (
    <ButtonStatus
      onClick={onClick}
      $status={status}
      id={`button-change-status-to-${status}`}
    >
      {labelMapper[status]}
    </ButtonStatus>
  );
}
