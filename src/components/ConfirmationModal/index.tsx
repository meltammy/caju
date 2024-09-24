import { FC } from "react";
import {
  Description,
  ModalContainer,
  ModalOverlay,
  Title,
  ButtonContainer,
  StyledAsyncButton,
} from "./styles";
import Button from "../Buttons/Button";

interface ConfirmationModalProps {
  title: string;
  description: string;
  confirmationButtonLabel: string;
  isOpen: boolean;
  isLoading?: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  description,
  confirmationButtonLabel,
  isOpen,
  isLoading,
  onClose,
  onConfirm,
}) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonContainer>
          <Button onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>

          <StyledAsyncButton
            isConfirmation
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmationButtonLabel}
          </StyledAsyncButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
