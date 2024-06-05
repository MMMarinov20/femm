import { Request, Response } from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-04-10",
});

export const PaymentController = {
  async paymentWebhook(req: Request, res: Response): Promise<void> {
    const sig = req.headers["stripe-signature"] as string;
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err: any) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      res.sendStatus(400);
      return;
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        console.log(session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.sendStatus(200);
  },
};
