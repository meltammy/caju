import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  padding: 1.5rem;

  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    gap: 1rem;

    div {
      width: 100%;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
