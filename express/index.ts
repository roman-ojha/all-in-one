import express from "express";

const app = express();
const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
  console.log(`Express running on http://localhost:${PORT}/`);
});
