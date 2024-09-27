import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  font-size: 1rem;

  svg {
    min-width: 1rem;
  }

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:first-of-type {
    margin-bottom: 0.5rem;
    padding: 1rem 3rem 0.5rem 1rem;
    border-bottom: 1px black solid;
    font-size: 2rem;

    span {
      margin: 0;
      white-space: break-spaces;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 2rem;
    }
  }
`;
