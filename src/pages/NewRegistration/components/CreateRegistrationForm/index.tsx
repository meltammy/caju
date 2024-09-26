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

export function CreateRegistrationForm() {
  const { mutate: createRegistration, isLoading } = useCreateRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CreateRegistrationFormData>({
    resolver: newRegistrationFormResolver,
    mode: "all",
  });

  const submitForm: SubmitHandler<CreateRegistrationFormData> = async (
    data
  ) => {
    const formattedData = formatCreateRegistrationPayload(data);
    createRegistration(formattedData);
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
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
    </Form>
  );
}
