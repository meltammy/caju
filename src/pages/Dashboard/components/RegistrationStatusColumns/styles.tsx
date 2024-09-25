import styled from "styled-components";
import { Spinner } from "~/components/Spinner";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  justify-content: center;
  min-height: 68vh;
  margin-bottom: 1rem;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    overflow: auto;
    margin-left: 24px;
  }
`;

export const StyledSpinner = styled(Spinner)`
  grid-column: 2;
`;
