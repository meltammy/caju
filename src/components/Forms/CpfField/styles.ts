import ReactInputMask from "react-text-mask";
import styled from "styled-components";

export const Input = styled(ReactInputMask)`
  width: 100%;
  padding: 0 0.5rem;
  min-height: 2.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease-in-out 0s;

  vertical-align: middle;
  border: 1px solid rgba(36, 28, 21, 0.3);
  border-radius: 0.5rem;

  font-size: 1rem;
  line-height: 1.125rem;
  font-weight: normal;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.petroleumBlue};
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.colors.petroleumBlue};
  }
`;
