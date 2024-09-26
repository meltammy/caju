import styled from "styled-components";
import { RegistrationStatus } from "~/types";

type Props = {
  $status: RegistrationStatus;
};

export const ButtonStatus = styled.button<Props>`
  font-size: 0.75rem;
  outline: none;
  border-radius: 0.25rem;
  border: none;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  width: 100%;
  border-radius: 0;
  height: 3rem;
  text-transform: uppercase;
  color: ${({ theme, $status }) =>
    theme.registrationStatus[$status].buttonColor};
  background: transparent;
  border-top: 1px ${({ theme }) => theme.colors.grey} solid;

  &:first-of-type {
    border-right: 1px ${({ theme }) => theme.colors.grey} solid;
  }
`;
