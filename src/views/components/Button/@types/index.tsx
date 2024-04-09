export interface IButton {
  children: React.ReactElement | string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disable?: boolean;
}
