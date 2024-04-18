import { apiService } from "./apiService";
import { Booking } from "../models/Booking";
export const createBooking = async (Booking: Booking, token: string) => {
  try {
    await apiService.post("createBooking", Booking, token);
    alert("Booking successful");
  } catch (error) {
    throw new Error("Booking failed");
  }
};
