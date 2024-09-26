import * as S from "./styles";
import { RegistrationStatus } from "~/types";
import { StatusColumn } from "./components/StatusColumn";
import { ConfirmationModalProvider } from "../ConfirmationModals/ConfirmationModalContext/ConfirmationModalProvider";
import { ConfirmChangeStatusModal } from "../ConfirmationModals/ConfirmChangeStatusModal";
import { ConfirmDeleteModal } from "../ConfirmationModals/ConfirmDeleteModal";
import { useRegistrationsContext } from "../RegistrationsContext/useRegistrationsContext";
import { useMemoizedRegistrationsByStatus } from "./components/hooks/useMemoizedRegistrationsByStatus";

const allColumns = [
  { status: RegistrationStatus.Review, title: "Pronto para revisar" },
  { status: RegistrationStatus.Approved, title: "Aprovado" },
  { status: RegistrationStatus.Reproved, title: "Reprovado" },
];

export const RegistrationStatusColumns = () => {
  const { data, isLoading } = useRegistrationsContext();

  const dataByStatus = useMemoizedRegistrationsByStatus(data);

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
              data={dataByStatus[column.status]}
            />
          );
        })}
        <ConfirmChangeStatusModal />
        <ConfirmDeleteModal />
      </S.Container>
    </ConfirmationModalProvider>
  );
};
