import { CpfField } from "~/components/Forms/CpfField";
import { useDebouncedInput } from "~/hooks/useDebouncedInput";
import { useEffect } from "react";
import { useRegistrationsContext } from "~/pages/Dashboard/components/RegistrationsContext/useRegistrationsContext";

export const CpfSearchField = () => {
  const { setSearchCpf } = useRegistrationsContext();

  const { bind, debouncedValue } = useDebouncedInput("");

  useEffect(() => {
    setSearchCpf(debouncedValue);
  }, [debouncedValue, setSearchCpf]);

  return <CpfField {...bind} />;
};
