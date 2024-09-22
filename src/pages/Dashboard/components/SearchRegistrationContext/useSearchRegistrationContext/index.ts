import { useContext } from "react";
import { SearchRegistrationContext, SearchRegistrationContextType } from "..";

export const useSearchRegistrationContext =
  (): SearchRegistrationContextType => {
    const context = useContext(SearchRegistrationContext);

    if (!context) {
      throw new Error(
        "useSearchRegistrationContext must be used within a SearchRegistrationProvider",
      );
    }

    return context;
  };
