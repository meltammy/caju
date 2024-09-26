import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  margin: 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  h3,
  p {
    margin: 0;
  }
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1rem;
  padding: 0 1rem;

  &:first-of-type {
    font-size: 2rem;
    border-bottom: 1px black solid;
    padding: 1rem 3rem 0.5rem 1rem;
    margin-bottom: 0.5rem;

    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
`;
