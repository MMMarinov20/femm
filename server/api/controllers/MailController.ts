import nodemailer from "nodemailer";

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
  async sendVerificationEmail(recipient: string): Promise<void> {
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
                            <a href="https://femmbulgaria.com/" style="display: inline-block; padding: 10px 20px; background-color: #FF6241; color: #fff; text-decoration: none; border-radius: 5px;">Verify Your Account</a>
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
};
