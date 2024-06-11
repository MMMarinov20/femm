import nodemailer from "nodemailer";
import { getRentalById } from "../models/Rentals";
import { getBookingById } from "../models/Booking";
import { getRequestById } from "../models/Request";
import { findUserById } from "../models/User";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "femmbulgaria@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const MailController = {
  async sendVerificationEmail(recipient: string, token: string): Promise<void> {
    const email = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Femm Bulgaria</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px; margin: 0;">
            <table style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; overflow: hidden;">
                <tr>
                    <td style="padding: 40px 20px;">
                        <h1 style="text-align: center; color: #333333; margin-bottom: 30px;">Welcome to Femm Bulgaria!</h1>
                        <p style="color: #666666; line-height: 1.6;">Thank you for joining Femm Bulgaria! We're thrilled to have you as a part of our community.</p>
                        <p style="color: #666666; line-height: 1.6;">If you want to have the full experience of our website, please verify your account by clicking the button below:</p>
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://femmbulgaria.com/verification/${token}" style="display: inline-block; padding: 10px 20px; background-color: #FF6241; color: #fff; text-decoration: none; border-radius: 5px;">Verify Your Account</a>
                        </div>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        `;

    const mailOptions = {
      from: "femmbulgaria@gmail.com",
      to: recipient,
      subject: "Welcome to Femm Bulgaria",
      html: email,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },

  async sendBookingConfirmationEmail(bookingId: string): Promise<void> {
    const booking = await getBookingById(bookingId);
    if (!booking) {
      throw new Error("Booking not found");
    }

    const rental = await getRentalById(booking.rentalId);
    const user = await findUserById(booking.userId);
    const email = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Femm Bulgaria</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            margin: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #FF6241;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #FF6241;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            background-color: #f4f4f4;
            color: #666;
            text-align: center;
            padding: 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Booking Confirmation</h1>
        </div>
        <div class="content">
            <p>Dear ${user?.name}</p>
            <p>Thank you for your booking with FemmBulgaria! Here are the details of your booking:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Booking ID:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      booking.id
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Place:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      rental?.title
                    } at ${rental?.location}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Start Date:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(
                      booking.startDate
                    ).toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>End Date:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(
                      booking.endDate
                    ).toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Adults:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      booking.adults
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Created At:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(
                      booking.createdAt
                    ).toLocaleDateString()}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Nights</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      (new Date(booking.endDate).getTime() -
                        new Date(booking.startDate).getTime()) /
                      (1000 * 60 * 60 * 24)
                    }</td>
                </tr>
            </table>
            <div style="text-align: center; margin-top: 30px;">
                <a href="https://femmbulgaria.com/success/${
                  booking.id
                }" class="button">View Booking</a>
            </div>
        </div>
        <div class="footer">
            <p>&copy; 2024 FemmBulgaria. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

    const mailOptions = {
      from: "femmbulgaria@gmail.com",
      to: user?.email,
      subject: "Booking Confirmation - Femm Bulgaria",
      html: email,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },

  async sendFormRequestEmail(requestId: string): Promise<void> {
    const request = await getRequestById(requestId);
    if (!request) {
      throw new Error("Request not found");
    }

    const email = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Request submitted - Femm Bulgaria</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
            margin: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #FF6241;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #FF6241;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            background-color: #f4f4f4;
            color: #666;
            text-align: center;
            padding: 10px;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Request submitted</h1>
        </div>
        <div class="content">
            <p>Thank you for your request, ${
              request.name
            }. We will contact you shortly. Here are the details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      request.name
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      request.email
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Reason:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      request.reason
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      request.phone
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${
                      request.message
                    }</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Created At:</strong></td>
                    <td style="padding: 10px; border-bottom: 1px solid #ddd;">${new Date(
                      request.createdAt
                    ).toLocaleTimeString()}</td>
                </tr>
            </table>
        </div>
        <div class="footer">
            <p>&copy; 2024 FemmBulgaria. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

    const mailOptions = {
      from: "femmbulgaria@gmail.com",
      to: request.email,
      subject: "New Request - Femm Bulgaria",
      html: email,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  },
};
