import React from "react";

import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, styled, ThemeProvider } from "baseui";
import { ParagraphSmall } from "baseui/typography";
import theme from "./config/theme";

const engine = new Styletron();

const Centered = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ThemeProvider theme={theme}>
          <Centered>
            <ParagraphSmall>Placeholder</ParagraphSmall>
          </Centered>
        </ThemeProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
