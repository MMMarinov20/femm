import { apiService } from "./apiService";

export const createBooking = async (
  rentalId: number,
  userId: number,
  startDate: Date,
  endDate: Date,
  adults: number
) => {
  try {
    await apiService.post("createBooking", {
      rentalId,
      userId,
      startDate,
      endDate,
      adults,
    });
    alert("Booking successful");
  } catch (error) {
    throw new Error("Booking failed");
  }
};
