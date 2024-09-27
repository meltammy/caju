import { CpfField } from "~/components/Forms/CpfField";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { SearchCpfFormData, searchCpfFormResolver } from "./validation";
import { useRegistrationsContext } from "~/components/RegistrationsContext/useRegistrationsContext";

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
    setSearchCpf(value || "");
  }, [value, setSearchCpf]);

  return <CpfField control={control} name="cpf" error={errors.cpf?.message} />;
};
