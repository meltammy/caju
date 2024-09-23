import ConfirmationModal from "~/components/ConfirmationModal";
import { useUpdateRegistrationStatus } from "../RegistrationCard/components/ChangeRegistrationStatusButton/hooks/useUpdateRegistrationStatus";
import { useConfirmationModalContext } from "../ConfirmationModalContext/useConfirmationModalContext";
import { RegistrationStatus } from "~/types";

const content = {
  [RegistrationStatus.Approved]: {
    descriptionLabel: "aprovada",
    buttonLabel: "Aprovar admissão",
  },
  [RegistrationStatus.Reproved]: {
    descriptionLabel: "reprovada",
    buttonLabel: "Reprovar admissão",
  },
  [RegistrationStatus.Review]: {
    descriptionLabel: "enviada para revisão",
    buttonLabel: "Enviar para revisão",
  },
};

export function ConfirmChangeStatusModal() {
  const {
    confirmationModalProps,
    setConfirmationModalProps: setChangeRegistrationStatusProps,
  } = useConfirmationModalContext();

  const { mutate } = useUpdateRegistrationStatus();

  function onConfirm() {
    if (!confirmationModalProps?.changeStatusProps) return;

    const { id, status } = confirmationModalProps.changeStatusProps;
    mutate({ id, status }).finally(onClose);
  }

  function onClose() {
    setChangeRegistrationStatusProps(undefined);
  }

  const status =
    confirmationModalProps?.changeStatusProps?.status ||
    RegistrationStatus.Approved;
  const { buttonLabel, descriptionLabel } = content[status];

  return (
    <ConfirmationModal
      title="Você tem certeza?"
      description={`Ao confirmar, a admissão será <b>${descriptionLabel}</b>`}
      onConfirm={onConfirm}
      isOpen={!!confirmationModalProps?.changeStatusProps}
      onClose={onClose}
      confirmationButtonLabel={buttonLabel}
    />
  );
}
