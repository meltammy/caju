import ConfirmationModal from "~/components/ConfirmationModal";
import { useConfirmationModalContext } from "../ConfirmationModalContext/useConfirmationModalContext";
import { useDeleteRegistration } from "./hooks/useDeleteRegistration";
import { theme } from "~/../styles/theme";

export function ConfirmDeleteModal() {
  const {
    confirmationModalProps,
    setConfirmationModalProps: setChangeRegistrationStatusProps,
  } = useConfirmationModalContext();

  const { mutate, isLoading } = useDeleteRegistration();

  function onConfirm() {
    if (!confirmationModalProps?.deleteRegistrationProps) return;

    const { id } = confirmationModalProps.deleteRegistrationProps;
    mutate(id).finally(onClose);
  }

  function onClose() {
    setChangeRegistrationStatusProps(undefined);
  }

  return (
    <ConfirmationModal
      title="Você tem certeza?"
      description={`Ao confirmar, a admissão será <b>deletada</b>`}
      onConfirm={onConfirm}
      isOpen={!!confirmationModalProps?.deleteRegistrationProps}
      onClose={onClose}
      confirmationButtonLabel="Deletar admissão"
      isLoading={isLoading}
      confirmationButtonColor={theme.colors.primary}
    />
  );
}
