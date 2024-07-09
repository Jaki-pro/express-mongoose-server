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
router.get("/", ProductControllers.getAllProducts);
router.get("/:id", ProductControllers.getSingleProduct);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
export const ProductRoutes = router;
