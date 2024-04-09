/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInput {
  id?: string;
  name: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  label: string;
  value: string;
  width?: string;
}
