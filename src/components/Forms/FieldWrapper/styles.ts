import styled from "styled-components";

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  width: 100%;
  font-weight: 600;
`;
