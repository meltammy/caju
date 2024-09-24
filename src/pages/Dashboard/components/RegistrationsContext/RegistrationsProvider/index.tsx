import { useState, ReactNode, FC } from "react";
import { RegistrationsContext } from "..";
import { useGetRegistrations } from "~/pages/Dashboard/components/RegistrationsContext/hooks/useGetRegistrations";

export const RegistrationsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchCpf, setSearchCpf] = useState<string>("");
  const fetchData = useGetRegistrations(searchCpf);

  return (
    <RegistrationsContext.Provider
      value={{ ...fetchData, searchCpf, setSearchCpf }}
    >
      {children}
    </RegistrationsContext.Provider>
  );
};
