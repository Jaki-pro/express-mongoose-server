import { Router } from "express";
import { ProductRoutes } from "../modules/Product/product.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/products",
    router: ProductRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
