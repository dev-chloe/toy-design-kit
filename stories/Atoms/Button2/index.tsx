import { ButtonProps } from "./types";
import "./index.css";

function Button2({
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

export { Button2 };
