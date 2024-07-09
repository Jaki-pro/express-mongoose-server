import { NextFunction, Request, Response, Router } from "express";
import { ProductControllers } from "./product.controller";
import { upload } from "../../utils/sendImageToCloudinary";

const router = Router();
router.post(
  "/create-product",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  ProductControllers.createProduct
);
export const ProductRoutes = router;
