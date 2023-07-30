import "styled-components";

type Colors = {
  black: string;
  gray: string;
  white: string;
  accent: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
  }
}

export type { Colors };
