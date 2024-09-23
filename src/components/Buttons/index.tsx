import styled from "styled-components";

const Button = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  height: 56px;
  color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`;

export default Button;
