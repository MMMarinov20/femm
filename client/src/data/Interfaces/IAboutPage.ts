interface Box {
  title: string;
  description: string;
}

export interface IAboutPage {
  Landing: {
    Hero: string;
    SubHero: string;
  };
  WhoWeAre: {
    Title: string;
    DescriptionFirst: string;
    SubTitleFirst: string;
    DescriptionSecond: string;
    SubTitleSecond: string;
    DescriptionThird: string;
    SubTitleThird: string;
    DescriptionFourth: string;
  };
  WhatWeDo: {
    Title: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
  };
  Mission: {
    Title: string;
    DescriptionFirst: string;
    DescriptionSecond: string;
    Boxes: Box[];
  };
}
