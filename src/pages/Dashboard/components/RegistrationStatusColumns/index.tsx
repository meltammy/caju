import * as S from "./styles";
import { useGetRegistrations } from "~/pages/Dashboard/hooks/useGetRegistrations";
import { Registration, RegistrationStatus } from "~/types";
import { StatusColumn } from "./components/StatusColumn";

const allColumns = [
  { status: RegistrationStatus.Review, title: "Pronto para revisar" },
  { status: RegistrationStatus.Approved, title: "Aprovado" },
  { status: RegistrationStatus.Reproved, title: "Reprovado" },
];

function filterRegistrationsByStatus(
  status: RegistrationStatus,
  data: Registration[] | null
) {
  return data?.filter((item) => item.status === status) || [];
}

export const RegistrationStatusColumns = () => {
  const { data } = useGetRegistrations();

  return (
    <S.Container>
      {allColumns.map((collumn) => {
        return (
          <StatusColumn
            key={collumn.status}
            {...collumn}
            registrations={filterRegistrationsByStatus(collumn.status, data)}
          />
        );
      })}
    </S.Container>
  );
};
