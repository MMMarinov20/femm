import { apiService } from "./apiService";
import { Review } from "../models/Review";

export const submitReview = async (review: Review) => {
  try {
    await apiService.post("reviews/submitReview", review);
    alert("Review submitted successfully");
  } catch (error) {
    throw new Error("Failed to submit review");
  }
};
