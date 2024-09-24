import { useState, ComponentProps } from "react";
import TextField from "~/components/TextField";
import { formatCpf } from "~/utils/formatters/formatCpf";

type Props = ComponentProps<typeof TextField>;

export function CpfField(props: Props) {
  const [cpfValue, setCpfValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatCpf(inputValue);

    if (props.onChange) {
      event.target.value = formattedValue;
      props.onChange(event);
    }

    setCpfValue(formattedValue);
  };

  return (
    <TextField
      {...props}
      type="text"
      id="cpf"
      maxLength={14}
      placeholder="Digite um CPF válido"
      value={cpfValue}
      onChange={handleChange}
    />
  );
}
