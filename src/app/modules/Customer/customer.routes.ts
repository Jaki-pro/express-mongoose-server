import { Router } from "express";
import { customerControllers } from "./customer.controller";

const router = Router();
router.get("/", customerControllers.getAllCustomers);
router.patch(
  "/:id",
  //validateRequest(AdminValidatons.adminValidationSchema),
  customerControllers.updateCustomer
);
router.delete(
  "/:id",
  //validateRequest(AdminValidatons.adminValidationSchema),
  customerControllers.deleteCustomer
);
export const CustomerRoutes = router;
