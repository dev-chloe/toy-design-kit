import { ThemeProvider } from "styled-components";
import { theme } from "../../stories/theme";

export const withTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <Story />
  </ThemeProvider>
);
