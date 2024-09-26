import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 1rem;
  }
`;
