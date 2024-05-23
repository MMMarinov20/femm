export interface IHomePage {
  Landing: {
    Hero: string;
    SubHero: string;
    CTA1: string;
    CTA2: string;
  };
  About: {
    Title: string;
    BigTitle: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
    Button: string;
  };
  Offer: {
    Title: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
    BoxFirst: {
      Title: string;
      Description: string;
    };
    BoxSecond: {
      Title: string;
      Description: string;
    };
  };
}
