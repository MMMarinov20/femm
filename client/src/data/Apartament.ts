export interface AdvantageInterface {
  title: string;
  description: string;
}

export interface ApartmentDetails {
  Building: string;
  Address: string;
  Floor: number;
  Floors: number;
  Bedrooms: number;
  Bathrooms: number;
  Kitchen: string;
  Area: number;
  Parking: string;
  Exposure: string;
  Garage: string;
}

export interface Apartment {
  id: number;
  apartment: ApartmentDetails;
}

export interface PropertyInterface {
  apartaments: Apartment[];
  advantages: AdvantageInterface[];
}

export interface PropertiesInterface {
  [key: string]: PropertyInterface;
}
