import { HTMLAttributes } from "react";
import styled from "styled-components";
import { RegistrationStatus } from "~/types";

type Props = {
  status: RegistrationStatus;
} & HTMLAttributes<HTMLButtonElement>;

export const ButtonStatus = styled.button<Props>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${({ theme, status }) =>
    theme.registrationStatus[status].buttonBackground};
  cursor: pointer;
`;
