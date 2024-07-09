import { Router } from "express";
import { BookingControllers } from "./booking.controller";
const router = Router();
router.post("/create-booking/:productId", BookingControllers.createBooking);
export const BookingRoutes = router;
