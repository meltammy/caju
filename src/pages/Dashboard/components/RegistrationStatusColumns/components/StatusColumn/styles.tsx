import styled from "styled-components";

export const Column = styled.div<{ status: any }>`
  height: auto;
  background-color: ${({ status, theme }) =>
    theme.registrationStatus[status].background};
  border-radius: 32px;
  min-height: 80vh;
  max-height: 80vh;
`;

export const TitleColumn = styled.h3<{ status: any }>`
  margin: 0px;
  color: ${({ status, theme }) => theme.registrationStatus[status].color};
  margin: 24px;
`;

export const CollumContent = styled.div`
  overflow: auto;
  max-height: 85%;
`;
