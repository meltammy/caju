import styled from "styled-components";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  background: #0000009e;
  z-index: 1;
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
`;

export const OffCanvas = styled.nav<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100vw")};
  z-index: 1;

  height: 100vh;
  width: 50vw;
  padding: 6rem 1rem 1rem 1rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 20px 7px #0000002e;
  transition: 0.5s;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const Container = styled.header<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1;
  z-index: 2;

  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0.25rem 0.25rem 1rem 0.25rem #0000001f;

  display: flex;
  align-items: center;
  gap: 2rem;

  color: ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  padding: 0;
  background: transparent;
  border: none;

  font-size: 2rem;
  color: red;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;
