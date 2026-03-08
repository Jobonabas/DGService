const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello from the backend 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Backend is working",
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});