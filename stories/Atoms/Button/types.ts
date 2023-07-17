type Kind = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  disabled?: boolean;
  kind?: Kind;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label?: string;
};

export type { Kind, ButtonProps };