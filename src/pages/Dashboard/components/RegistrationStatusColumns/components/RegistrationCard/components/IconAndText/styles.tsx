import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  font-size: 1rem;

  &:first-of-type {
    margin-bottom: 0.5rem;
    padding: 1rem 3rem 0.5rem 1rem;
    border-bottom: 1px black solid;
    font-size: 2rem;

    span {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }
`;
