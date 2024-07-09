import { Router } from "express";

const router = Router();
const moduleRoutes = [
  {
    path: "/users",
    router: router.get("/", (req, res) => {
      res.send({
        message: "GET request to users",
      });
    }),
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.router));
export default router;
