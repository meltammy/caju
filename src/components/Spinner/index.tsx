import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div.attrs({
  role: "status",
  "aria-live": "polite",
})`
  margin: auto;
  border: 0.5rem solid ${({ theme }) => theme.colors.lightGrey};
  border-top: 0.5rem solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 1s linear infinite;
`;
