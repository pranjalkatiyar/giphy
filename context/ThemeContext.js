// MyContext.js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [type, setType] = useState("trending");

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode, setType, type }}>
      {children}
    </ThemeContext.Provider>
  );
};
