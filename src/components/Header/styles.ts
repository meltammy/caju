import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: 4px 4px 16px 3px #0000001f;
  height: 4rem;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0px 1.5rem;
  gap: 2rem;
  z-index: 1;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
`;
