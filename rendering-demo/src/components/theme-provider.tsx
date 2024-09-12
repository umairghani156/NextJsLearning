"use client"
import { createContext, useContext } from "react";

type Theme = {
    primary: string,
    secondary: string
};

const defaultTheme: Theme = {
    primary: "#007bff",
    secondary: "#6c757d",
};

export const ThemeContext = createContext<Theme>(defaultTheme);

  export const ThemeProvider = ({children}: {children: React.ReactNode})=> {
    return (
      <html lang="en">
        <ThemeContext.Provider value={defaultTheme}>
          {children}
        </ThemeContext.Provider>
      </html>
    );
  }
export const useTheme = () => useContext(ThemeContext)