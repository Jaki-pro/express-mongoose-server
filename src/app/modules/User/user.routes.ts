import express from "express";
import { UserControllers } from "./user.controller";
const router = express.Router();
router.post(
  "/create-admin",
  //auth('admin'),
  //validateRequest(userValidations.userValidationSchema),
  UserControllers.createAdmin
);
router.post(
  "/create-customer",
  //auth('admin'),
  //validateRequest(userValidations.userValidationSchema),
  UserControllers.createCustomer
);
//console.log("asche");
export const UserRoutes = router;
