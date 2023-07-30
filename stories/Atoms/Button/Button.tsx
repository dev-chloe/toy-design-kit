import { Root as StyledRoot } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export function Button({
  kind,
  label,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps): React.JSX.Element {
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
