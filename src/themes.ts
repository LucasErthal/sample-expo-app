import { DefaultTheme } from "styled-components";

const general = {
  sizes: {
    sm: "120px",
    md: "180px",
    lg: "240px",
  },
};

export const light: DefaultTheme = {
  ...general,
  colors: {
    primary: "#4D6B80",
    secondary: "#99D6FF",
    tertiary: "#B8C4CC",
    dark: "#737A80",
    light: "#E6F5FF",
    black: "#000",
    white: "#fff",
  },
};
