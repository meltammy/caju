import styled from "styled-components";
import Spinner from "~/components/Spinner";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  margin-top: 24px;
  min-height: 68vh;
`;

export const StyledSpinner = styled(Spinner)`
  grid-column: 2;
`;
