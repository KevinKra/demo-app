import { PaletteMode } from "@mui/material";

// https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
// https://surajsharma.net/blog/react-material-ui-set-typography-color
// https://www.youtube.com/watch?v=SUEkAOuQZTQ&ab_channel=AnthonySistilli
// https://bareynol.github.io/mui-theme-creator/#BottomNavigation

export const getDesignTokens = (mode: PaletteMode) => ({
  status: {
    danger: "#555",
  },
  typography: {
    fontSize: 14,
    h1: undefined,
    h2: undefined,
    h3: undefined,

    body1: {
      color: "#fff",
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#fff",
            secondary: "#000",
            disabled: "#fff",
          },
          primary: { main: "#e35f9b", light: "#888", dark: "#222" },
          secondary: { main: "#888" },
          brands: {
            github: "#151413",
            google: "#4285f4",
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#fff",
            secondary: "#000",
            disabled: "#fff",
          },
          primary: { main: "#e35f9b", light: "#888", dark: "#222" },
          secondary: { main: "#888" },
          brands: {
            github: "#151413",
            google: "#4285f4",
          },
        }),
  },
});
