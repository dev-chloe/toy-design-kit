import "styled-components";

interface Colors {
  readonly black: string;
  readonly gray: string;
  readonly white: string;
  readonly accent: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
  }
}

export type { Colors };
