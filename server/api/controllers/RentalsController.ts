import { Request, Response } from "express";
import * as RentalsModel from "../models/Rentals";

export const RentalsController = {
  async getRentalById(req: Request, res: Response): Promise<void> {
    try {
      const rentalId: number = parseInt(req.params.rentalId, 10);
      const rental = await RentalsModel.getRentalById(rentalId);
      if (rental) {
        res.status(200).json(rental);
      } else {
        res.status(404).json({ error: "Rental not found" });
      }
    } catch (error) {
      console.error("Error fetching rental:", error);
      res.status(500).json({ error: "Could not fetch rental" });
    }
  },
};
