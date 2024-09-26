import { CpfField } from "~/components/Forms/CpfField";
import { useEffect } from "react";
import { useRegistrationsContext } from "~/pages/Dashboard/components/RegistrationsContext/useRegistrationsContext";
import { useForm } from "react-hook-form";
import { SearchCpfFormData, searchCpfFormResolver } from "./validation";

export const CpfSearchField = () => {
  const { setSearchCpf } = useRegistrationsContext();
  const {
    formState: { errors },
    control,
    watch,
  } = useForm<SearchCpfFormData>({
    resolver: searchCpfFormResolver,
    mode: "all",
  });

  const value = watch("cpf");

  useEffect(() => {
    value && setSearchCpf(value);
  }, [value, setSearchCpf]);
  console.log(value);
  return <CpfField control={control} name="cpf" error={errors.cpf?.message} />;
};
