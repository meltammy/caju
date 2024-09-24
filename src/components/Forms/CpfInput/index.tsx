import { useState } from "react";
import { FieldValues } from "react-hook-form";
import TextField, { TextFieldProps } from "~/components/Forms/TextField";
import { formatCpf } from "~/utils/formatters/formatCpf";

export function CpfField<FormData extends FieldValues>(
  props: TextFieldProps<FormData>
) {
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
