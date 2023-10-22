import { Stack } from "expo-router";
import { ThemeProvider } from "../context/ThemeContext";

const Layout = () => {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
};

export default Layout;
