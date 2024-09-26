import { createContext } from "react";
import { Registration } from "~/types";

export interface RegistrationsContextType {
  searchCpf: string;
  setSearchCpf: (value: string) => void;
  data: Registration[] | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export const RegistrationsContext = createContext<
  RegistrationsContextType | undefined
>(undefined);
