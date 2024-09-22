import { createContext } from "react";

export interface SearchRegistrationContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const SearchRegistrationContext = createContext<SearchRegistrationContextType | undefined>(undefined);
