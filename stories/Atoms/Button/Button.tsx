import React from "react";
import { type ButtonProps } from "./Button.types";
import "./Button.css";

export function Button({
  kind,
  label,
  disabled = false,
  onClick,
  type = "button",
}: ButtonProps): React.JSX.Element {
  return (
    <button
      className={`btn btn_${kind}`}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      type={type}
    >
      {label}
    </button>
  );
}
