export interface IApartmentPage {
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
  Form: {
    title: string;
    name: string;
    email: string;
    reason: string;
    phone: string;
    message: string;
    agree: string;
    button: string;
  };
}
