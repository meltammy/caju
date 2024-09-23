import { RegistrationStatus } from "~/types";
import { ButtonStatus } from "./styles";
import { useChangeRegistrationStatusContext } from "../../../ChangeRegistrationStatusContext/useChangeRegistrationStatusContext";

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
  const { setChangeRegistrationStatusProps } =
    useChangeRegistrationStatusContext();

  function onClick() {
    setChangeRegistrationStatusProps({ status, id });
  }

  return (
    <ButtonStatus onClick={onClick} status={status}>
      {labelMapper[status]}
    </ButtonStatus>
  );
}
