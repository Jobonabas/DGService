import express from "express";
import { error } from "node:console";
import nodemailer from "nodemailer";

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jgehrung8@gmail.com",
    pass: "qpzefuubkojelksz ", // App-Passwort, ohne Leerzeichen
  },
});

router.post("/contact", async(req, res) => {
    const {name, email, phone, message} = req.body
    if (!name || !email || !message) {
      return res.status(400).json({error: "Pflichfelder fehlen"});
    }
    try {
      await transporter.sendMail({
        from: `"Kontaktformular DG Service" <${process.env.SMTP_USER}>`,
        to: "jgehrung@web.de",
        replyTo: email,
        subject: `Neue Anfrage von ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nTelefon: ${phone || "-"}\n\n${message}`,
      });
      res.status(200).json({success: true});
    } catch(err) {
      console.error("Mailversand fehlgeschlagen: ", err);
      res.status(500).json({error: "Mailversand fehlgeschlagen"});
    }
});

export default router;