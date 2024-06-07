import { Request, Response } from "express";
import * as BookingModel from "../models/Booking";
import { jwtDecode } from "jwt-decode";
import { parseCookies } from "../middlewares/AuthMiddleware";
export const BookingController = {
  async getBookingById(req: Request, res: Response): Promise<void> {
    try {
      const bookingId: string = req.params.bookingId;
      const booking = await BookingModel.getBookingById(bookingId);
      if (booking) {
        res.status(200).json(booking);
      } else {
        res.status(404).json({ error: "Booking not found" });
      }
    } catch (error) {
      console.error("Error fetching booking:", error);
      res.status(500).json({ error: "Could not fetch booking" });
    }
  },

  async getBookingsByUserId(req: Request, res: Response): Promise<void> {
    try {
      const cookies = parseCookies(req.headers.cookie || "");
      const token = cookies.token;

      if (token) {
        const userId: number = (jwtDecode(token) as { id: number }).id;
        const bookings = await BookingModel.getBookingsByUserId(userId);
        res.status(200).json(bookings);
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Could not fetch bookings" });
    }
  },

  async getBookingsByRentalId(req: Request, res: Response): Promise<void> {
    try {
      const rentalId: number = parseInt(req.params.rentalId, 10);
      const bookings = await BookingModel.getBookingsByRentalId(rentalId);
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Could not fetch bookings" });
    }
  },

  async deleteBooking(req: Request, res: Response): Promise<void> {
    try {
      const bookingId: string = req.params.bookingId;
      await BookingModel.deleteBooking(bookingId);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).json({ error: "Could not delete booking" });
    }
  },

  async updateBooking(req: Request, res: Response): Promise<void> {
    try {
      const bookingId: string = req.params.bookingId;
      const booking = req.body;
      const updatedBooking = await BookingModel.updateBooking(
        bookingId,
        booking
      );
      res.status(200).json(updatedBooking);
    } catch (error) {
      console.error("Error updating booking:", error);
      res.status(500).json({ error: "Could not update booking" });
    }
  },

  async getBookings(req: Request, res: Response): Promise<void> {
    try {
      const bookings = await BookingModel.getBookings();
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Could not fetch bookings" });
    }
  },
};
