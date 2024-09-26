import styled from "styled-components";

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  box-shadow: 0.25rem 0.25rem 1rem 0.25rem #0000001f;
  height: 4rem;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 2rem;
  z-index: 1;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
`;
