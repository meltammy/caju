import TextField from "~/components/Forms/TextField";
import {
  CreateRegistrationFormData,
  newRegistrationFormResolver,
} from "./validation";
import { SubmitHandler, useForm } from "react-hook-form";
import { CpfField } from "~/components/Forms/CpfField";
import { useCreateRegistration } from "./hooks/useCreateRegistration";
import { formatCreateRegistrationPayload } from "./utils/formatCreateRegistrationPayload";
import { AsyncButton } from "~/components/Buttons/AsyncButton";
import { Form } from "./styles";
import { useRegistrationsContext } from "~/components/RegistrationsContext/useRegistrationsContext";
import { useEffect } from "react";

export function CreateRegistrationForm() {
  const { setSearchCpf } = useRegistrationsContext();

  const { mutate: createRegistration, isLoading } = useCreateRegistration();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateRegistrationFormData>({
    resolver: newRegistrationFormResolver,
    mode: "all",
  });

  useEffect(() => {
    setSearchCpf("");
  }, []);

  const submitForm: SubmitHandler<CreateRegistrationFormData> = async (
    data
  ) => {
    const formattedData = formatCreateRegistrationPayload(data);
    createRegistration(formattedData);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <TextField
        placeholder="Insira o Nome Completo"
        label="Nome Completo"
        name="employeeName"
        id="employeeName"
        required
        register={register}
        error={errors.employeeName?.message}
      />

      <TextField
        placeholder="Insira o E-mail"
        label="E-mail"
        type="email"
        name="email"
        id="email"
        required
        register={register}
        error={errors.email?.message}
      />

      <CpfField
        placeholder="Insira o CPF"
        label="CPF"
        name="cpf"
        id="cpf"
        required
        control={control}
        error={errors.cpf?.message}
      />

      <TextField
        placeholder="Insira a Data de admissão"
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
    </Form>
  );
}
