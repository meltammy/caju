import * as S from "./styles";
import { Registration, RegistrationStatus } from "~/types";
import { StatusColumn } from "./components/StatusColumn";
import { ConfirmationModalProvider } from "./components/ConfirmationModalContext/ConfirmationModalProvider";
import { ConfirmChangeStatusModal } from "./components/ConfirmChangeStatusModal";
import { ConfirmDeleteModal } from "./components/ConfirmDeleteModal";
import { useRegistrationsContext } from "../RegistrationsContext/useRegistrationsContext";

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
  const { data, isLoading } = useRegistrationsContext();

  if (isLoading)
    return (
      <S.Container>
        <S.StyledSpinner />
      </S.Container>
    );

  return (
    <ConfirmationModalProvider>
      <S.Container>
        {allColumns.map((column) => {
          return (
            <StatusColumn
              key={column.status}
              {...column}
              registrations={filterRegistrationsByStatus(column.status, data)}
            />
          );
        })}
        <ConfirmChangeStatusModal />
        <ConfirmDeleteModal />
      </S.Container>
    </ConfirmationModalProvider>
  );
};
