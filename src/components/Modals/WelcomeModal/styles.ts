import styled, { keyframes } from "styled-components";
import Button from "~/components/Buttons/Button";

const coming = keyframes`
  0% {
    bottom: -73rem;
  }

  100% {
    bottom: 0;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
  z-index: 999;

  width: 52rem;
  height: 90%;
  max-height: 30rem;
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  b {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: absolute;
    width: 100%;
    min-width: 50vw;
    max-height: 36rem;
    margin-top: auto;

    display: grid;
    grid-template-rows: 1fr 10fr 1fr;

    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    animation: ${coming} 1s ease-in-out forwards;
  }
`;

export const StyledButton = styled(Button)`
  width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0% 0 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
`;

export const DescriptionContainer = styled.div``;

export const Description = styled.p`
  font-size: 1rem;
  max-width: 60%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
    margin: 0 0 1rem 0;
    font-size: 0.875rem;
  }
`;

export const Illustration = styled.img`
  position: absolute;
  right: 5%;
  bottom: 5%;
  max-height: 60%;
  z-index: -1;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-height: 43%;
  }
`;
