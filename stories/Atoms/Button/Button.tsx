import { ButtonProps } from "./types";
import "./Button.css";
import "./Button2.css";

function Button({
  kind,
  label,
  disabled = false,
  onClick,
}: ButtonProps): React.JSX.Element {
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

export { Button };
