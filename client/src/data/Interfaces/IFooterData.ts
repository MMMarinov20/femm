export interface IFooterLink {
  title: string;
  url: string;
}

export interface IFooterData {
  description: string;
  links: IFooterLink[];
  copyright: string;
  privacy: string;
  terms: string;
}
