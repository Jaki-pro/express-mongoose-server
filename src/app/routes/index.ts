import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";
import { BookingRoutes } from "../modules/Booking/booking.route";
import { ContactRoutes } from "../modules/Contact/contact.route";
import { UserRoutes } from "../modules/User/user.routes";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { AdminRoutes } from "../modules/Admin/admin.routes";

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
    path: "/auth",
    router: AuthRoutes,
  },
  {
    path: "/contact",
    router: ContactRoutes,
  },
  {
    path: "/users",
    router: UserRoutes,
  },
  {
    path: "/admins",
    router: AdminRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
