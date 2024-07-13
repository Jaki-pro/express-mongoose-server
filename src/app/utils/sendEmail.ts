import nodemailer from "nodemailer";
import config from "../config";

export const sendEmail = async (from: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "mdjak8980@gmail.com",
      pass: "pucu ftri lxgc aljs",
    },
  });
  await transporter.sendMail({
    from: from, // sender address
    to: "jaki.cse@stud.cou.ac.bd", // list of receivers
    subject: "Password changing alert", // Subject line
    text: "Reset your password within 10 minutes", // plain text body
    html: html, // html body
  });
};
