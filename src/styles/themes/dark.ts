import { createTheme } from "@mui/material/styles";

export const THEME_DARK = createTheme({
  palette: {
    primary: {
      main: "rgba(150,150,150,1)",
    },
  },
  status: {
    danger: "rgba(0,0,0,1)",
  },
});
