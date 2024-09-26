import styled from "styled-components";

export const ModalContainer = styled.div`
  min-width: 32rem;
  max-width: 95vw;
  z-index: 999;
  padding: 1.5rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column-reverse;
  }
`;
