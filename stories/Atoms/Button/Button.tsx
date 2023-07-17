import { ButtonProps } from "./types";
import "./Button.scss";

export function Button({
  kind,
  label,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`btn btn_${kind}`}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
    >
      {label}
    </button>
  );
}
