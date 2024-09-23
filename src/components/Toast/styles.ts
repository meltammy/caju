import styled from "styled-components";

export const ToastContainerStyled = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
`;

export const ToastStyled = styled.div<{ type: "success" | "error" | "info" }>`
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
