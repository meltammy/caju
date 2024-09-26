import styled from "styled-components";
import { RegistrationStatus } from "~/types";

type Props = {
  $status: RegistrationStatus;
};

export const ButtonStatus = styled.button<Props>`
  width: 100%;
  height: 3rem;
  padding: 0.25rem 1rem;

  border-radius: 0.25rem;
  border: none;
  border-radius: 0;

  font-size: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  color: ${({ theme, $status }) =>
    theme.registrationStatus[$status].buttonColor};
  background: transparent;
  border-top: 1px ${({ theme }) => theme.colors.grey} solid;

  &:first-of-type {
    border-right: 1px ${({ theme }) => theme.colors.grey} solid;
  }
`;
