import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
import { BookingRoutes } from "../modules/Booking/booking.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    router: ProductRoutes,
  },
  {
    path: "/orders",
    router: BookingRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
