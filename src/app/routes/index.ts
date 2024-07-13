import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
import { BookingRoutes } from "../modules/Booking/booking.route";
import { ContactRoutes } from "../modules/Contact/contact.route";

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
  {
    path: "/contact",
    router: ContactRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
