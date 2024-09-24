import Button from "~/components/Buttons";
import TextField from "~/components/Forms/TextField";
import {
  NewRegistrationFormData,
  newRegistrationFormResolver,
} from "./validation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CpfField } from "~/components/Forms/CpfInput";

export function NewRegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewRegistrationFormData>({
    resolver: newRegistrationFormResolver,
    mode: "all",
  });

  const submitForm: SubmitHandler<NewRegistrationFormData> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextField
        placeholder="Nome"
        label="Nome"
        name="name"
        id="name"
        required
        register={register}
        error={errors.name?.message}
      />

      <TextField
        placeholder="Email"
        label="Email"
        type="email"
        name="email"
        id="email"
        required
        register={register}
        error={errors.email?.message}
      />

      <CpfField
        placeholder="CPF"
        label="CPF"
        name="cpf"
        id="cpf"
        required
        register={register}
        error={errors.cpf?.message}
      />

      <TextField
        label="Data de admissão"
        type="date"
        name="admissionDate"
        id="admissionDate"
        required
        register={register}
        error={errors.admissionDate?.message}
      />

      <Button type="submit" disabled={!isValid}>
        Cadastrar
      </Button>
    </form>
  );
}
