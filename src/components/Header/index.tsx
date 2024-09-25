import { Logo } from "../Logo";
import * as S from "./styles";

export function Header() {
  return (
    <S.Container>
      <Logo />
      <h1>Caju Front Teste</h1>
    </S.Container>
  );
}
