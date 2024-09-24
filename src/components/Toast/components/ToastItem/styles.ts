import styled from "styled-components";
import { ToastType } from "../../types";

export const ToastStyled = styled.div<{ type: ToastType }>`
  background-color: ${({ theme, type }) => theme.colors[type]};
  color: white;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  transition: opacity 0.5s;

  button {
    margin-left: 10px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
