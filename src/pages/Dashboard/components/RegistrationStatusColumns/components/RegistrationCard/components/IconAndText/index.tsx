import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  icon: ReactNode;
  text: string;
};

export function IconAndText({ icon, text }: Props) {
  return (
    <Container>
      {icon}
      <span>{text}</span>
    </Container>
  );
}
