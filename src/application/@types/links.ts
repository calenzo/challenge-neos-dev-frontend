export interface ILinkEntity {
  id: number;
  phone_number: string;
  message: string;
}

export interface ILinkPayload {
  phone_number: string;
  message: string;
}

export interface ILinkResponse {
  id: number;
  url: string;
}
