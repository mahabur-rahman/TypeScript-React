import { createContext } from "react";
import { theme } from "./theme";

// define a type
type ThemeContextProviderProps = {
  children: React.ReactNode;
};

// create a context
export const ThemeContext = createContext(theme);

// context provider
export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
