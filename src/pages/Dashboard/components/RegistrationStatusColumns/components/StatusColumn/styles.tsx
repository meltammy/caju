import styled from "styled-components";
import { RegistrationStatus } from "~/types";

export const Column = styled.div<{ status: RegistrationStatus }>`
  height: auto;
  background-color: ${({ status, theme }) =>
    theme.registrationStatus[status].background};
  border-radius: 32px;
  height: 100%;

  @media screen and (max-width: 1200px) {
    &:nth-child(3) {
      margin-right: 1.5rem;
    }
  }
`;

export const TitleColumn = styled.h2<{ status: any }>`
  color: ${({ status, theme }) => theme.registrationStatus[status].color};
  margin: 24px;
`;

export const CollumContent = styled.div`
  &::-webkit-scrollbar {
    width: 0.25em;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.grey};
    border-radius: 2rem;
  }
`;
