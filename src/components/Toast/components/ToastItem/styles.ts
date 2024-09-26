import styled from "styled-components";
import { ToastType } from "../../types";

export const ToastStyled = styled.div<{ type: ToastType }>`
  background-color: ${({ theme, type }) => theme.colors[type]};
  box-shadow: 0 2px 7px 2px #00000080;
  transition: opacity 0.5s;

  padding: 0.75rem;
  margin: 0.75rem 0;
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-left: 10px;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
`;
