import { FC } from "react";
import * as S from "./styles";
import Button from "../../Buttons/Button";
import { AsyncButton } from "../../Buttons/AsyncButton";
import { ModalOverlay } from "../ModalOverlay";

interface ConfirmationModalProps {
  title: string;
  description: string;
  confirmationButtonLabel: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  confirmationButtonColor?: string;
}

type Event = { stopPropagation: () => void };

export const confirmationModalTestId = "confirmation-modal";

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  description,
  confirmationButtonLabel,
  confirmationButtonColor: confirmationButtonColor = "primary",
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
            color={confirmationButtonColor}
            onClick={onConfirm}
            isLoading={isLoading}
            id="confirm-button"
          >
            {confirmationButtonLabel}
          </AsyncButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
