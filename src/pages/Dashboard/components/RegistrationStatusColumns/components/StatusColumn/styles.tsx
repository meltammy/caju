import styled from "styled-components";
import { RegistrationStatus } from "~/types";

export const Column = styled.div<{ $status: RegistrationStatus }>`
  height: auto;
  background-color: ${({ $status: status, theme }) =>
    theme.registrationStatus[status].background};
  border-radius: 2rem;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 18rem;

    &:nth-child(3) {
      margin-right: 1.5rem;
    }
  }
`;

export const TitleColumn = styled.h2<{ $status: any }>`
  color: ${({ $status: status, theme }) =>
    theme.registrationStatus[status].color};
  margin: 1.5rem;
`;

export const ColumContent = styled.div`
  height: 100%;
`;

export const NoResultsMessage = styled.h3`
  margin: auto;
  margin: 15rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGrey};
`;
