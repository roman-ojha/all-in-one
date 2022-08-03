import express from "express";
import router from "./routes/main.js";

const app = express();
const PORT = process.env.PORT || 8080;
app.use(router);

app.listen(PORT, () => {
  console.log(`Express running on http://localhost:${PORT}/`);
});
