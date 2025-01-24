import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
  const adminData = req.body;
  const result = await UserServices.createAdminIntoDB(adminData);
  // will send data
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});
const createCustomer = catchAsync(async (req, res) => {
  const customerData = req.body;
  const result = await UserServices.createCustomerIntoDB(customerData);
  // will send data
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});
export const UserControllers = {
  createAdmin,
  createCustomer,
};
