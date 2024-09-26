import styled from "styled-components";

export const Card = styled.div`
  position: relative;

  background-color: ${({ theme }) => theme.colors.white};
  margin: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-radius: 0.5rem;

  h3,
  p {
    margin: 0;
  }
`;

export const Actions = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;
