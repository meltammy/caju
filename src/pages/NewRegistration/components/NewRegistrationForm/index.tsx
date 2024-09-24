import TextField from "~/components/Forms/TextField";
import {
  NewRegistrationFormData,
  newRegistrationFormResolver,
} from "./validation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CpfField } from "~/components/Forms/CpfInput";
import { useCreateRegistration } from "./hooks/useCreateRegistration";
import { formatCreateRegistrationPayload } from "./utils/formatCreateRegistrationPayload";
import { AsyncButton } from "~/components/Buttons/AsyncButton";

export function NewRegistrationForm() {
  const { mutate: createRegistration, isLoading } = useCreateRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<NewRegistrationFormData>({
    resolver: newRegistrationFormResolver,
    mode: "all",
  });

  const submitForm: SubmitHandler<NewRegistrationFormData> = async (data) => {
    const formattedData = formatCreateRegistrationPayload(data);
    createRegistration(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <TextField
        placeholder="Nome"
        label="Nome"
        name="employeeName"
        id="employeeName"
        required
        register={register}
        error={errors.employeeName?.message}
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

      <AsyncButton type="submit" disabled={!isValid} isLoading={isLoading}>
        Cadastrar
      </AsyncButton>
    </form>
  );
}
