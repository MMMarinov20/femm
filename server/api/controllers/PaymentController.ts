import { Request, Response } from "express";
import { Booking } from "../models/Booking";
import { getRentalById } from "../models/Rentals";
import { createBooking } from "../models/Booking";
import { MailController } from "./MailController";
import Stripe from "stripe";
import Crypto from "crypto";

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
        const session = await stripe.checkout.sessions.retrieve(
          event.data.object.id,
          {
            expand: ["line_items"],
          }
        );

        if (
          session &&
          session.line_items &&
          session.amount_total &&
          session.metadata
        ) {
          console.log(
            `🔔  Payment for ${session.amount_total / 100}$ was successful.`
          );
          const booking: Booking = {
            id: session.metadata.bookingId,
            userId: parseInt(session.metadata.userId),
            rentalId: parseInt(session.metadata.rentalId),
            startDate: new Date(
              session.line_items.data[0].description
                .split("from ")[1]
                .split(" to ")[0]
            ),
            endDate: new Date(
              session.line_items.data[0].description
                .split("to ")[1]
                .split(", ")[0]
            ),
            adults: parseInt(
              session.line_items.data[0].description
                .split(" adults")[0]
                .split(" ")
                .pop()!
            ),
            createdAt: new Date(),
          };

          if (booking.id) {
            await createBooking(booking);
            await MailController.sendBookingConfirmationEmail(
              booking.id.toString()
            );
          }
        }

        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  },

  async createCheckoutSession(req: Request, res: Response): Promise<void> {
    try {
      const booking: Booking = req.body;
      booking.id = Crypto.randomBytes(16).toString("hex");
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
                name: `Reservation for ${rental?.title} from ${new Date(
                  booking.startDate
                ).toLocaleDateString()} to ${new Date(
                  booking.endDate
                ).toLocaleDateString()}, ${nights} nights for ${
                  booking.adults
                } adults`,
              },
              unit_amount: nightlyRate,
            },
            quantity: nights,
          },
        ],
        mode: "payment",
        success_url: `${process.env.CLIENT_URL}/`,
        cancel_url: `${process.env.CLIENT_URL}/`,
        metadata: {
          rentalId: booking.rentalId.toString(),
          userId: booking.userId.toString(),
          bookingId: booking.id,
        },
      });

      res.status(200).json(session);
    } catch (error) {
      console.error("Error creating booking:", error);
      res.status(500).json({ error: "Could not create booking" });
    }
  },
};
