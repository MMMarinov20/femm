import { Request, Response } from "express";
import * as ReviewModel from "../models/Review";

export const ReviewController = {
  async submitReview(req: Request, res: Response): Promise<void> {
    try {
      const review = req.body;
      const newReview = await ReviewModel.submitReview(review);
      res.status(201).json(newReview);
    } catch (error) {
      console.error("Error submitting review:", error);
      res.status(500).json({ error: "Could not submit review" });
    }
  },
  async getReviewsByRentalId(req: Request, res: Response): Promise<void> {
    try {
      const rentalId: number = parseInt(req.params.rentalId, 10);
      const reviews = await ReviewModel.getReviewsByRentalId(rentalId);
      res.status(200).json(reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      res.status(500).json({ error: "Could not fetch reviews" });
    }
  },
};
