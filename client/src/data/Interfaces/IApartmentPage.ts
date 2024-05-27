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
    Title: string;
    Type: string[];
    Bathrooms: string[];
    Consists: string[];
  };
  Advantages: {
    Title: string;
  };
  Form: {
    Title: string;
    Name: string;
    Email: string;
    Reason: string;
    Phone: string;
    Message: string;
    Agree: string;
    Button: string;
  };
}
