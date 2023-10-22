// MyContext.js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toogleTheme = () => {
    console.log("toogleTheme");
    setDarkMode((prevMode) => !prevMode);
    console.log(isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
