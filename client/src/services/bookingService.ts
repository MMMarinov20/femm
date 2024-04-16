import { apiService } from "./apiService";

export const createBooking = async (
  rentalId: number,
  userId: number,
  startDate: Date,
  endDate: Date,
  adults: number,
  token: string
) => {
  try {
    await apiService.post(
      "createBooking",
      {
        rentalId,
        userId,
        startDate,
        endDate,
        adults,
      },
      token
    );
    alert("Booking successful");
  } catch (error) {
    throw new Error("Booking failed");
  }
};
