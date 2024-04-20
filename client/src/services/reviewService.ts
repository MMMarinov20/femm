import { apiService } from "./apiService";
import { Review } from "../models/Review";

export const submitReview = async (review: Review, token: string) => {
  try {
    await apiService.post("reviews/submitReview", review, token);
    alert("Review submitted successfully");
  } catch (error) {
    throw new Error("Failed to submit review");
  }
};
