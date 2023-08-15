import type React from "react";

type Kind = "primary" | "secondary" | "ghost";

type Type = "button" | "submit";

interface RootStyleProps {
  disabled?: boolean;
  kind?: Kind;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type StyledButtonProps = RootStyleProps & {
  label?: string;
  type?: Type;
};

export type { Kind, RootStyleProps, StyledButtonProps, Type };
