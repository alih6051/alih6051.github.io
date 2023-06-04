import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    body: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "bgPrimary",
      color: "#fff",
    },
  },
};

const colors = {
  bgPrimary: "#0A1929",
  bgSecondary: "#001E3C",
  textPrimary: "#007FFF",
  textSecondary: "#66B2FF",
};

export const theme = extendTheme({
  config,
  styles,
  colors,
});
