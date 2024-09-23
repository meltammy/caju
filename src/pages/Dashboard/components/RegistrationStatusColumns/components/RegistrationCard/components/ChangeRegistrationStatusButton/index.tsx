import { RegistrationStatus } from "~/types";
import { useUpdateRegistrationStatus } from "./hooks/useUpdateRegistrationStatus";
import { ButtonStatus } from "./styles";

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
  const { mutate } = useUpdateRegistrationStatus({ id, status });

  function onClick() {
    mutate();
  }

  return (
    <ButtonStatus onClick={onClick} status={status}>
      {labelMapper[status]}
    </ButtonStatus>
  );
}
