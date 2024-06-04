import { Request, Response } from "express";
import * as BookingModel from "../models/Booking";
import { jwtDecode } from "jwt-decode";
import stripe from "stripe";
import { parseCookies } from "../middlewares/AuthMiddleware";

export const BookingController = {
  async createBooking(req: Request, res: Response): Promise<void> {
    try {
      const booking = req.body;
      // const newBooking = await BookingModel.createBooking(booking);
      // res.status(201).json(newBooking);
      const Stripe = new stripe(
        "sk_test_51LmA4kJflswFoq3GF9vAT5JI4nhlhpXXFgnqlWNugG8OFpCCq7UX8cKuWxCm4TzshTUlSHGFTTmEzNZwdyytdKUA00siAQiNkX"
      );

      const session = await Stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Booking",
              },
              unit_amount: 1000,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: process.env.CLIENT_URL,
        cancel_url: process.env.CLIENT_URL,
      });

      res.status(200).json(session);

      //if the payment is successful, create the booking
      // if (session.payment_status === "paid") {
      //   const newBooking = await BookingModel.createBooking(booking);
      //   res.status(201).json(newBooking);
      // } else {
      //   res.status(400).json({ error: "Payment failed" });
      // }
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Could not create booking" });
    }
  },
  // async getBookingById(req: Request, res: Response): Promise<void> {
  //   try {
  //     const bookingId: number = parseInt(req.params.bookingId, 10);
  //     const booking = await BookingModel.getBookingById(bookingId);
  //     if (booking) {
  //       res.status(200).json(booking);
  //     } else {
  //       res.status(404).json({ error: "Booking not found" });
  //     }
  //   } catch (error) {
  //     console.error("Error fetching booking:", error);
  //     res.status(500).json({ error: "Could not fetch booking" });
  //   }
  // },

  async getBookingsByUserId(req: Request, res: Response): Promise<void> {
    try {
      // const cookie = req.headers.cookie;
      // const token = cookie?.split("=")[1];
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
