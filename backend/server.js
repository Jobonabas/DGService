import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRouter from "./routes/contact.js"; // Pfad ggf. anpassen

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:4321" })); // deine Astro-Dev-URL
app.use(express.json());

app.use("/api", contactRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});