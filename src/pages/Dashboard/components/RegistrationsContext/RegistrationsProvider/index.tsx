import { useState, ReactNode, FC } from "react";
import { RegistrationsContext } from "..";
import { useGetRegistrations } from "~/pages/Dashboard/components/RegistrationsContext/hooks/useGetRegistrations";

export const RegistrationsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const fetchData = useGetRegistrations(searchValue);

  return (
    <RegistrationsContext.Provider
      value={{ ...fetchData, searchValue, setSearchValue }}
    >
      {children}
    </RegistrationsContext.Provider>
  );
};
