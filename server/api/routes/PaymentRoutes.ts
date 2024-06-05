import express from "express";
import { PaymentController } from "../controllers/PaymentController";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = req.body;
    next();
  },
  PaymentController.paymentWebhook
);

export default router;
