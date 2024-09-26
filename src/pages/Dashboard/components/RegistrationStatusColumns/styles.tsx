import styled from "styled-components";
import { Spinner } from "~/components/Spinner";

export const Container = styled.div`
  min-height: 68vh;
  margin-bottom: 1rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: 1.5rem;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

export const StyledSpinner = styled(Spinner)`
  grid-column: 2;
`;
