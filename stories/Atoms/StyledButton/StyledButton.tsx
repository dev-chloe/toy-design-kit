import React from "react";
import { Root as StyledRoot } from "./StyledButton.styled";
import { type StyledButtonProps } from "./StyledButton.types";

export function StyledButton({
  kind,
  label,
  disabled = false,
  onClick,
  type = "button",
}: StyledButtonProps): React.JSX.Element {
  return (
    <StyledRoot
      kind={kind}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      type={type}
    >
      {label}
    </StyledRoot>
  );
}
