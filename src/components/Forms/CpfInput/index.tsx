import { ComponentProps } from "react";
import TextField from "~/components/TextField";

type Props = ComponentProps<typeof TextField>;

export function CpfField(props: Props) {
  return (
    <TextField
      type="text"
      id="cpf"
      maxLength={14}
      placeholder="Digite um CPF válido"
      {...props}
    />
  );
}
