import styled from "styled-components";

export const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Description = styled.p`
  margin: 10px 0 20px;
`;

export const Button = styled.button<{ isConfirmation?: boolean }>`
  margin-right: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${({ theme, isConfirmation }) =>
    isConfirmation ? theme.colors.primary : theme.colors.grey};
  color: white;

  &:hover {
    opacity: 0.8;
  }
`;
