import express from "express";
import { PaymentController } from "../controllers/PaymentController";

const router = express.Router();

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.paymentWebhook
);
router.post("/checkout-session", PaymentController.createCheckoutSession);
export default router;
