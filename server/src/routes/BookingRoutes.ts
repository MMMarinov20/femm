import express from "express";
import { BookingController } from "../controllers/BookingController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.get("/bookings", BookingController.getBookings);

router.use("/bookings", AuthMiddleware.authenticate);
router.post("/bookings/createBooking", BookingController.createBooking);
router.get("/bookings/:bookingId", BookingController.getBookingById);
router.get("/bookings/user/:userId", BookingController.getBookingsByUserId);
router.get(
  "/bookings/rental/:rentalId",
  BookingController.getBookingsByRentalId
);
router.delete("/bookings/:bookingId", BookingController.deleteBooking);
router.put("/bookings/:bookingId", BookingController.updateBooking);

export default router;
