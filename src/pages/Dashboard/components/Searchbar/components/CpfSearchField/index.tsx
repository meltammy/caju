
import { CpfField } from "~/components/Forms/CpfInput";
import { useDebouncedInput } from "~/hooks/useDebouncedInput";
import { useEffect } from "react";
import { useSearchRegistrationContext } from "~/pages/Dashboard/components/SearchRegistrationContext/useSearchRegistrationContext";



export const CpfSearchField = () => {
  const { setSearchValue } = useSearchRegistrationContext();

  const {bind, debouncedValue} = useDebouncedInput('')

  useEffect(()=>{
    setSearchValue(debouncedValue)
  },[debouncedValue, setSearchValue])
  
  return <CpfField {...bind} />
};
