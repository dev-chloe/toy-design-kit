import "styled-components";

interface Colors {
  readonly black: string;
  readonly gray: string;
  readonly white: string;
  readonly accent: string;
}

interface DesignKitDefaultTheme {
  colors: Colors;
}

declare module "styled-components" {
  export interface DefaultTheme extends DesignKitDefaultTheme { }
}

export type { Colors };
