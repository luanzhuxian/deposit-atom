import React, {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
} from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (val: string) => void;
}

const initialContext: ThemeContextProps = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextProps>(initialContext);

export const ThemeProvider: React.FC<PropsWithChildren<object>> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
