import { FC } from "react";
import * as S from "./styles";
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
    <S.ModalOverlay
      onClick={onClose}
      $isOpen={isOpen}
      data-testid={confirmationModalTestId}
    >
      <S.ModalContainer onClick={(event: Event) => event?.stopPropagation()}>
        <S.Title id="modal-title">{title}</S.Title>
        <S.Description dangerouslySetInnerHTML={{ __html: description }} />
        <S.ButtonContainer>
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
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default ConfirmationModal;
