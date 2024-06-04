import { apiService } from "./apiService";
import { Booking } from "../models/Booking";
export const createBooking = async (Booking: Booking) => {
  try {
    return await apiService.post("bookings/createBooking", Booking);
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

export const getBookingsByUserId = async () => {
  try {
    return await apiService.get(`bookings/user`);
  } catch (error) {
    throw new Error("Failed to get bookings");
  }
};
