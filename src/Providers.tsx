import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, ThemeProvider } from "baseui";
import theme from "./config/theme";

import App from "./App";

const engine = new Styletron();

export default function Providers() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}
