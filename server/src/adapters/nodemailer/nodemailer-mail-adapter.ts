import { SendMailData, MailAdapter } from "../mail-adapters";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "81df07d547f9fe",
    pass: "08206cfacfa50c",
  },
});

export class NodemaillerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <ola@feedget.com>",
      to: "Daniel Conceição <danieldcc.colares@gmail.com",
      subject,
      html: body,
    });
  }
}
