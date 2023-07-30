import React from "react";

type Kind = "primary" | "secondary" | "ghost";

type Type = "button" | "submit";

type RootStyleProps = {
  disabled?: boolean;
  kind?: Kind;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = RootStyleProps & {
  label?: string;
  type?: Type;
};

export type { Kind, RootStyleProps, ButtonProps, Type };
