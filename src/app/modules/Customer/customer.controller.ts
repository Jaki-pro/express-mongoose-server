import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { customerServices } from "./customer.services";

const getAllCustomers = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await customerServices.getAllCustomersFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customers retrieved successfully",
    data: result,
  });
});
const updateCustomer = catchAsync(async (req, res) => {
  const customerId = req.params.id;
  const updateData = req.body;
  const result = await customerServices.updateCustomerIntoDB(
    customerId,
    updateData
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});
const deleteCustomer = catchAsync(async (req, res) => {
  const customerId = req.params.id;
  const result = await customerServices.deleteCustomerFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Customer deleted successfully",
    data: result,
  });
});

export const customerControllers = {
  getAllCustomers,
  updateCustomer,
  deleteCustomer,
};
