/* eslint-disable @typescript-eslint/no-empty-interface */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "@mui/material/styles";
import { themes } from "./styles/themes";

// todo - move theme module into separate file
// https://mui.com/material-ui/customization/typography/#adding-amp-disabling-variants

interface CustomPalette {
  brands: {
    github: string;
    google: string;
  };
}

declare module "@mui/material" {
  interface Palette extends CustomPalette {
    // * feeds typing to props in components
  }

  interface PaletteOptions extends CustomPalette {
    // * feeds typing to mui createTheme
  }

  interface CustomTheme {
    status: {
      danger: string;
    };
  }

  interface TypographyPropsVariantOverrides {
    poster: true;
    h1: false;
    h2: false;
    h3: false;
  }

  interface Theme extends CustomTheme {}

  interface ThemeOptions extends CustomTheme {}
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={themes.THEME_LIGHT}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
