import type React from "react";

type Kind = "primary" | "secondary" | "ghost";

type Type = "button" | "submit";

interface RootStyleProps {
  disabled?: boolean;
  kind?: Kind;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = RootStyleProps & {
  className?: string;
  label?: string;
  type?: Type;
};

export type { Kind, RootStyleProps, ButtonProps, Type };
