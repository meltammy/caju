import styled from "styled-components";
import Button from "~/components/Buttons/Button";
import { _IconButtonStyled } from "~/components/Buttons/IconButton";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  min-height: 90vh;
  overflow: hidden;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 31rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 1rem;

  ${_IconButtonStyled} {
    height: fit-content;
  }

  ${Button} {
    align-self: flex-end;
  }

  @media screen and (max-width: 1200px) {
    height: 82vh;
    margin: 1rem;
  }

  @media screen and (min-width: 1200px) {
    box-shadow: 0 0 10px 6px #00000021;
    border: 2px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 3rem;
  }
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 8fr 1fr;

  h2 {
    margin: 0;
    text-align: center;
  }

  @media screen and (max-width: 1200px) {
    margin: 0 1rem;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    gap: 2rem;

    h2 {
      grid-row: 2;
    }
  }
`;
