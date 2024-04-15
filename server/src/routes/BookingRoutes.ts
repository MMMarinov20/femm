import express from "express";
import { BookingController } from "../controllers/BookingController";

const router = express.Router();

router.post("/createBooking", BookingController.createBooking);
router.get("/booking/:bookingId", BookingController.getBookingById);
router.get("/bookings/user/:userId", BookingController.getBookingsByUserId);
router.get(
  "/bookings/rental/:rentalId",
  BookingController.getBookingsByRentalId
);
router.delete("/booking/:bookingId", BookingController.deleteBooking);
router.put("/booking/:bookingId", BookingController.updateBooking);
router.get("/bookings", BookingController.getBookings);

export default router;
