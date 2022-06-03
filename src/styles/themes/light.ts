import { createTheme } from "@mui/material/styles";

export const THEME_LIGHT = createTheme({
  status: {
    danger: "#555",
  },
  typography: {
    h1: undefined,
    h2: undefined,
    h3: undefined,
  },
  palette: {
    primary: { main: "#151413", light: "#222", dark: "#888" },
    secondary: { main: "#888" },
    brands: {
      github: "#151413",
      google: "#4285f4",
    },
  },
});
