import { apiService } from "./apiService";
import { Booking } from "../models/Booking";
export const createBooking = async (Booking: Booking, token: string) => {
  try {
    await apiService.post("bookings/createBooking", Booking, token);
    alert("Booking successful");
  } catch (error) {
    throw new Error("Booking failed");
  }
};

export const getAllBookings = async () => {
  try {
    return await apiService.get("bookings");
  } catch (error) {
    throw new Error("Failed to get bookings");
  }
};
