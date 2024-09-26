import styled from "styled-components";

export const OffCanvas = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 50vw;
  padding: 6rem 1rem 1rem 1rem;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.white};
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100vw")};
  box-shadow: 0 0 20px 7px #0000002e;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: 0.5s;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.headerMobile}) {
    display: none;
  }
`;

export const Container = styled.header<{ $isOpen: boolean }>`
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
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerMobile}) {
    gap: 1rem;
    justify-content: space-between;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const NavItemsContainer = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 1rem;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.headerMobile}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: 2rem;
  color: red;
  display: flex;
  padding: 0;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.headerMobile}) {
    display: none;
  }
`;
