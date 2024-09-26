import { Logo } from "./components/Logo";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <Logo />
      <S.Title>Caju Front Teste</S.Title>
    </S.Container>
  );
}
