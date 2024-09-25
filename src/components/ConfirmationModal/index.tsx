import { FC } from "react";
import {
  Description,
  ModalContainer,
  ModalOverlay,
  Title,
  ButtonContainer,
} from "./styles";
import Button from "../Buttons/Button";
import { AsyncButton } from "../Buttons/AsyncButton";

interface ConfirmationModalProps {
  title: string;
  description: string;
  confirmationButtonLabel: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmattionButtonColor?: string;
}

type Event = { stopPropagation: () => void };

export const confirmationModalTestId = "confirmation-modal";

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  description,
  confirmationButtonLabel,
  confirmattionButtonColor = "primary",
  isOpen,
  isLoading,
  onClose,
  onConfirm,
}) => {
  return (
    <ModalOverlay
      onClick={onClose}
      $isOpen={isOpen}
      data-testid={confirmationModalTestId}
    >
      <ModalContainer onClick={(event: Event) => event?.stopPropagation()}>
        <Title id="modal-title">{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonContainer>
          <Button
            $variant="outline"
            color="grey"
            onClick={onClose}
            disabled={isLoading}
            id="cancel-button"
          >
            Cancelar
          </Button>

          <AsyncButton
            $variant="outline"
            color={confirmattionButtonColor}
            onClick={onConfirm}
            isLoading={isLoading}
            id="confirm-button"
          >
            {confirmationButtonLabel}
          </AsyncButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
