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
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-width: 32rem;
  max-width: 36rem;
  width: 60%;
  height: 90%;
  max-height: 30rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  position: relative;

  b {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 50vw;
    width: 100%;
    max-height: 36rem;
    display: grid;
    grid-template-rows: 1fr 10fr 1fr;
    margin-top: auto;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    position: absolute;
    animation: ${coming} 1s ease-in-out forwards;
    max-width: 91vw;
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
