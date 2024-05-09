import express from "express";
import { RentalsController } from "../controllers/RentalsController";

const router = express.Router();

router.get("/rentals/:rentalId", RentalsController.getRentalById);

export default router;
