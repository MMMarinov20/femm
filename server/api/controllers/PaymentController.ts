import { Request, Response } from "express";
import { Booking } from "../models/Booking";
import { getRentalById } from "../models/Rentals";
import { createBooking } from "../models/Booking";
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
        console.log(`🔔  Payment for ${session.amount_total} was successful.`);
        console.log(session);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  },

  async createCheckoutSession(req: Request, res: Response): Promise<void> {
    try {
      const booking: Booking = req.body;
      booking.createdAt = new Date();

      new Date(booking.startDate).setHours(0, 0, 0, 0);
      new Date(booking.endDate).setHours(0, 0, 0, 0);

      const nights: number = ((new Date(booking.endDate).getTime() -
        new Date(booking.startDate).getTime()) /
        (1000 * 60 * 60 * 24)) as number;

      const nightlyRate = 60 * 100;

      const rental = await getRentalById(booking.rentalId);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Reservation for ${(rental?.title, rental?.location)}`,
                description: `Booking from ${new Date(
                  booking.startDate
                ).toLocaleDateString()} to ${new Date(
                  booking.endDate
                ).toLocaleDateString()}`,
              },
              unit_amount: nightlyRate,
            },
            quantity: nights,
          },
        ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/success`,
        cancel_url: `${process.env.CLIENT_URL}/cancel`,
      });

      res.status(200).json(session);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Could not create booking" });
    }
  },
};
