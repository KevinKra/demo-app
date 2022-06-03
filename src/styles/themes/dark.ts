import { createTheme } from "@mui/material/styles";

export const THEME_DARK = createTheme({
  status: {
    danger: "#555",
  },
  typography: {
    h1: undefined,
    h2: undefined,
    h3: undefined,
  },
  palette: {
    brands: {
      github: "#151413",
      google: "#4285f4",
    },
  },
});
