import { HiMenu, HiX } from "react-icons/hi";
import { Logo } from "./components/Logo";
import * as S from "./styles";
import { useState } from "react";
import { NavLinks } from "./components/NavLinks";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <>
      <S.Container $isOpen={menuIsOpen}>
        <Logo />
        <S.Title>Caju Front Teste</S.Title>
        <S.NavItemsContainer>
          <NavLinks />
        </S.NavItemsContainer>
        <S.MenuButton
          onClick={toggleMenu}
          aria-expanded={menuIsOpen}
          aria-label={menuIsOpen ? "Fechar menu" : "Abrir menu"}
          aria-haspopup
        >
          {menuIsOpen ? <HiX /> : <HiMenu />}
        </S.MenuButton>
      </S.Container>
      <S.Overlay $isOpen={menuIsOpen} onClick={toggleMenu} />
      <S.OffCanvas $isOpen={menuIsOpen}>
        <NavLinks />
      </S.OffCanvas>
    </>
  );
}
