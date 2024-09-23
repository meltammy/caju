import { FC } from "react";
import {
  Description,
  ModalContainer,
  ModalOverlay,
  Title,
  Button,
} from "./styles";

interface ConfirmationModalProps {
  title: string;
  description: string;
  confirmationButtonLabel: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  title,
  description,
  confirmationButtonLabel,
  isOpen,
  onClose,
  onConfirm,
}) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <Title>{title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
        <div>
          <Button onClick={onClose}>Cancel</Button>
          <Button isConfirmation onClick={onConfirm}>
            {confirmationButtonLabel}
          </Button>
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ConfirmationModal;
