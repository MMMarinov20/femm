export interface ApartmentInterface {
  Landing: {
    Info: string[];
    Buttons: {
      First: string;
      Second: string;
      Third: string;
    };
  };
  Description: {
    title: string;
    type: string[];
    bathrooms: string[];
    consists: string[];
  };
  Advantages: {
    title: string;
  };
}
