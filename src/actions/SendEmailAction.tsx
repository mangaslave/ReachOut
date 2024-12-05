"use server";

import nodemailer from "nodemailer";

export default async function SendEmailAction(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "keeles1@my.bcit.ca",
    subject: "ReachOut Mailing Service",
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {success: true, message: "Email sent successfully!"};
  } catch (error) {
    return {success: false, message: `Error sending email: ${error}`};
  }
}
