import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    width: 100%;
    margin-top: 2rem;
  }

  @media screen and (max-width: 1200px) {
    margin: 1rem;
  }
`;
