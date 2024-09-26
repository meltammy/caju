import ReactInputMask from "react-input-mask";
import styled from "styled-components";

export const Input = styled(ReactInputMask)`
  padding: 0 0.5rem;
  vertical-align: middle;
  border-radius: 2px;
  width: 100%;
  min-height: 2.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: normal;
  border-radius: 0.5rem;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.petroleumBlue};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.petroleumBlue};
  }
`;
