import { Router } from "express";
import { BookingControllers } from "./booking.controller";
const router = Router();
router.post("/create-order", BookingControllers.createBooking);
export const BookingRoutes = router;
