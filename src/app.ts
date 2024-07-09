import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import cookieParse from "cookie-parser";
import router from "./app/routes";
import notFound from "./app/middlewares/notFound";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";

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
app.use(notFound);
app.use(globalErrorHandler);
export default app;
