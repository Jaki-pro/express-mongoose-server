import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import cookieParse from "cookie-parser";
import router from "./app/routes";

app.use(cors({ origin: "*", credentials: true }));
app.use(cookieParse()); // for cookies
app.use(express.json());

//Base Api
app.use("/api/v1/", router);
app.get("/", async (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express API!",
  });
});
export default app;
