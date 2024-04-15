import { Request, Response } from "express";
import * as BookingModel from "../models/Booking";

export const BookingController = {
  async createBooking(req: Request, res: Response): Promise<void> {
    try {
      const booking = req.body;
      const newBooking = await BookingModel.createBooking(booking);
      res.status(201).json(newBooking);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Could not create booking" });
    }
  },
  async getBookingById(req: Request, res: Response): Promise<void> {
    try {
      const bookingId: number = parseInt(req.params.bookingId, 10);
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
      const userId: number = parseInt(req.params.userId, 10);
      const bookings = await BookingModel.getBookingsByUserId(userId);
      res.status(200).json(bookings);
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
      const bookingId: number = parseInt(req.params.bookingId, 10);
      await BookingModel.deleteBooking(bookingId);
      res.status(204).end();
    } catch (error) {
      console.error("Error deleting booking:", error);
      res.status(500).json({ error: "Could not delete booking" });
    }
  },

  async updateBooking(req: Request, res: Response): Promise<void> {
    try {
      const bookingId: number = parseInt(req.params.bookingId, 10);
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
