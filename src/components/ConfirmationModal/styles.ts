import styled from "styled-components";

export const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-width: 32rem;
  max-width: 95vw;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;

  @media screen and (max-width: 1200px) {
    min-width: 50vw;
    margin: 1rem;
  }
`;

export const Title = styled.h2`
  margin: 0;
`;

export const Description = styled.p`
  margin: 10px 0 1.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
  }

  button {
    width: 100%;
    place-content: center;
  }
`;
