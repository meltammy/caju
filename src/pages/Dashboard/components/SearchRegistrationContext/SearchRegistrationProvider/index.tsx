import { useState, ReactNode, FC } from "react";
import { SearchRegistrationContext } from "..";

export const SearchRegistrationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchRegistrationContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchRegistrationContext.Provider>
  );
};
