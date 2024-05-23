import { IconType } from "react-icons";
export interface AdvantageInterface {
  title: string;
  description: string;
  icon: IconType;
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
  Description: string;
  SubDescription: string;
}

export interface Apartment {
  id: number;
  apartment: ApartmentDetails;
}

export interface PropertyInterface {
  apartaments: Apartment[];
  advantages: AdvantageInterface[];
  Description: string;
}

export interface PropertiesInterface {
  [key: string]: PropertyInterface;
}
