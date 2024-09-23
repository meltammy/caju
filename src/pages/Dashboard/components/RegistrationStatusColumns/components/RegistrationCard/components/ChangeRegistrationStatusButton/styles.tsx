import { HTMLAttributes } from "react";
import styled from "styled-components";
import { RegistrationStatus } from "~/types";

type Props = {
  status: RegistrationStatus;
} & HTMLAttributes<HTMLButtonElement>;

const registrationStatusStyles: {
  [key in string]: { background: string };
} = {
  [RegistrationStatus.Review]: {
    background: "#FDF8E9",
  },
  [RegistrationStatus.Approved]: {
    background: "rgb(155, 229, 155)",
  },
  [RegistrationStatus.Reproved]: {
    background: "rgb(255, 145, 154)",
  },
};

export const ButtonStatus = styled.button<Props>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) =>
    registrationStatusStyles[props.status].background};
  cursor: pointer;
`;
