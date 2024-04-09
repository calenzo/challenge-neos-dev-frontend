export interface ILayoutModal {
  children: React.ReactElement;
  openModal: boolean;
  closeModal?: () => void;
  disableBoxShadow?: boolean;
}

export interface IStyledContainer {
  openModal: boolean;
  background?: string;
  padding?: string;
  overFlow?: string;
  paddingMobile?: string;
}
