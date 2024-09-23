import { CpfField } from "~/components/Forms/CpfInput";
import { useDebouncedInput } from "~/hooks/useDebouncedInput";
import { useEffect } from "react";
import { useRegistrationsContext } from "~/pages/Dashboard/components/RegistrationsContext/useRegistrationsContext";

export const CpfSearchField = () => {
  const { setSearchValue } = useRegistrationsContext();

  const { bind, debouncedValue } = useDebouncedInput("");

  useEffect(() => {
    setSearchValue(debouncedValue);
  }, [debouncedValue, setSearchValue]);

  return <CpfField {...bind} />;
};
