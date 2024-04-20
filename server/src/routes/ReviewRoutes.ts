import express from "express";
import { ReviewController } from "../controllers/ReviewController";
import { AuthMiddleware } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.get("/reviews/:rentalId", ReviewController.getReviewsByRentalId);
router.use("/reviews", AuthMiddleware.authenticate);
router.post("/reviews/submitReview", ReviewController.submitReview);

export default router;
