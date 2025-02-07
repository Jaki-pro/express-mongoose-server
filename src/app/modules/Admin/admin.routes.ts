import { Router } from "express";
import { adminControllers } from "./admin.controller";

const router = Router();
router.get("/", adminControllers.getAllAdmins);
router.patch(
  "/:id",
  //validateRequest(AdminValidatons.adminValidationSchema),
  adminControllers.updateAdmin
);
router.delete(
  "/:id",
  //validateRequest(AdminValidatons.adminValidationSchema),
  adminControllers.deleteAdmin
);
export const AdminRoutes = router;
