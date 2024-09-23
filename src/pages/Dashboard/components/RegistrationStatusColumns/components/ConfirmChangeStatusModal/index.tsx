import ConfirmationModal from "~/components/ConfirmationModal";
import { useUpdateRegistrationStatus } from "../RegistrationCard/components/ChangeRegistrationStatusButton/hooks/useUpdateRegistrationStatus";
import { useChangeRegistrationStatusContext } from "../ChangeRegistrationStatusContext/useChangeRegistrationStatusContext";
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
  const { changeRegistrationStatusProps, setChangeRegistrationStatusProps } =
    useChangeRegistrationStatusContext();

  const { mutate } = useUpdateRegistrationStatus();

  function onConfirm() {
    if (!changeRegistrationStatusProps) return;

    const { id, status } = changeRegistrationStatusProps;
    mutate({ id, status }).finally(onClose);
  }

  function onClose() {
    setChangeRegistrationStatusProps(undefined);
  }

  const status =
    changeRegistrationStatusProps?.status || RegistrationStatus.Approved;
  const { buttonLabel, descriptionLabel } = content[status];

  return (
    <ConfirmationModal
      title="Você tem certeza?"
      description={`Ao confirmar, a admissão será <b>${descriptionLabel}</b>`}
      onConfirm={onConfirm}
      isOpen={!!changeRegistrationStatusProps}
      onClose={onClose}
      confirmationButtonLabel={buttonLabel}
    />
  );
}
