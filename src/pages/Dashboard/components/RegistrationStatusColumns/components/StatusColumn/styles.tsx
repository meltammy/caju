import styled from "styled-components";
import { RegistrationStatus } from "~/types";

const registrationStatusStyles: {
  [key in string]: { background: string; title: string };
} = {
  [RegistrationStatus.Review]: {
    background: "#FDF8E9",
    title: "#EFC24D",
  },
  [RegistrationStatus.Approved]: {
    background: "#EEEEFD",
    title: "#4242DF",
  },
  [RegistrationStatus.Reproved]: {
    background: "#FBEDF6",
    title: "#CE2893",
  },
};

export const Column = styled.div<{ status: any }>`
  height: auto;
  background-color: ${({ status }) =>
    registrationStatusStyles[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ status: any }>`
  margin: 0px;
  color: ${({ status }) => registrationStatusStyles[status].title};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
