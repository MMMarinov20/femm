export interface IFooterLink {
  Title: string;
  Url: string;
}

export interface IFooterData {
  Description: string;
  Links: IFooterLink[];
  Copyright: string;
  Privacy: string;
  Terms: string;
}
