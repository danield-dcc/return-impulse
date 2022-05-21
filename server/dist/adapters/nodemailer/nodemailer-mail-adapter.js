"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemaillerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "81df07d547f9fe",
        pass: "08206cfacfa50c",
    },
});
class NodemaillerMailAdapter {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <ola@feedget.com>",
            to: "Daniel Conceição <danieldcc.colares@gmail.com",
            subject,
            html: body,
        });
    }
}
exports.NodemaillerMailAdapter = NodemaillerMailAdapter;
