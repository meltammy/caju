import { FC } from "react";
import {
  Description,
  ModalContainer,
  ModalOverlay,
  Title,
  Button,
  StyledSpinner,
  ButtonContainer,
} from "./styles";

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
          <Button isConfirmation onClick={onConfirm} disabled={isLoading}>
            {isLoading ? <StyledSpinner /> : confirmationButtonLabel}
          </Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
