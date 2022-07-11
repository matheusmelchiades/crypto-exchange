import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, ThemeProvider } from "baseui";
import { SnackbarProvider } from "baseui/snackbar";

import theme from "./config/theme";
import snackbarConfig from "./config/snackbar";

import App from "./App";

const engine = new Styletron();

export default function Providers() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            {...snackbarConfig}
          >
            <App />
          </SnackbarProvider>
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
