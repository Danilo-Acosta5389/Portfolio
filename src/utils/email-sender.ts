"use server";

import { SendEmailDTO } from "@/types/mail";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transporter = nodemailer.createTransport({
  host: "smtp.strato.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

const name = "daniloacosta.dev";

const sender: Mail.Address = {
  name: name,
  address: String(process.env.SMTP_USERNAME),
};

const recipients: Mail.Address[] = [
  {
    name: name,
    address: String(process.env.DEVELOPER),
  },
  {
    name: name,
    address: String(process.env.DEVELOPER2),
  },
];

export default async function emailSender(dto: SendEmailDTO) {
  try {
    // Email to owner of site
    await transporter.sendMail({
      from: sender,
      to: recipients,
      subject: "Meddelande från Portfolio",
      text: dto.message,
      html: `
      <body style="">
      <h3>Ett meddelande har skickats från din hemsida</h3>
      <h4>Personens uppgifter</h4>
      <p>Namn: ${dto.name}</p>
      <p>Telefonnummer: ${dto.number}</p>
      <p>E-post: ${dto.email}</p>
      <h4>Meddelande:</h4>
      <p style="max-width:500px;">${dto.message}</p>
      </body>`.trim(),
    });

    // Email to sender
    await transporter.sendMail({
      from: sender,
      to: dto.email,
      subject: "Thank you for getting in touch!",
      text: "We have received your message and will get back to you shortly.",
      html: `
      <body
    style="background-color: rgb(255, 255, 255); max-width: 450px; width: full; padding-bottom:1px; display:flex; justify-content: center; align-items: center; flex-direction: column;"
  >
    <div style="width: 100%; display: flex; overflow: hidden; justify-content: center; align-items: center; flex-direction: column;">
      <img src="https://daniloacosta.dev/images/uploads/da-logo.png"
      alt="daniloacosta.dev logo" 
      width="full" 
      height="full" 
      style="display: block; margin: 0 auto; margin-top:20px; width:100%;"/>
      <p style="font-size: medium; font-weight: lighter;line-break: normal; color: rgb(100, 100, 100); margin-left: 10px; margin-right: 10px;">
          This is an automated message. Please do not reply to this email.</p> 
    </div>
    
    <div
      style="
        width: 85%;
        border: 1px solid rgb(219, 219, 219);
        margin-right: auto;
        margin-left: auto;
        display: block;
      "
    ></div>
    <div
      style="
        margin: 20px;
        display: block;
        font-family: helvetica;
        font-weight: bold;
        color: rgb(7, 7, 7);
      "
    >
      <h3>Hello, ${dto.name}</h3>
      <p style="font-size: medium; font-weight: normal">
        You have made contact. <br />I will get back to you as soon as possible, so stay put. <br /><br />With kind regards<span style="font-weight: bolder"
          >,<br /><br />
          Danilo Acosta,</span>
          <br />
          Developer
      </p>
      <div style="margin-top: 2rem">
        <div style="margin-bottom:5px;">Your details</div>
        <div
          style="
            margin-top: 0.5rem;
            margin:auto;
            padding: 10px;
            min-height: 200px;
            background-color: rgb(233, 233, 233);
          "
        >
            <div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">Name</span> <br />
              <span style="font-weight: lighter">${dto.name}</span>
            </div>
            <div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">E-mail</span> <br />
              <span style="font-weight: lighter">${dto.email}</span>
            </div>
            ${
              dto.number && dto.number.length > 0
                ? `<div style="margin-bottom: 0.5rem; line-height: 1.5rem;">
              <span style="font-weight: bold">Phone number</span> <br />
              <span style="font-weight: lighter">${dto.number}</span>
            </div>`
                : ""
            }
            <div style="margin-bottom: 0.5rem;">
              <div style="font-weight: bold; margin-bottom:5px;">Message</div>
              <span style="font-weight: lighter; line-break:normal;">${
                dto.message
              }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>`.trim(),
    });
    return { success: true, error: null };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}
