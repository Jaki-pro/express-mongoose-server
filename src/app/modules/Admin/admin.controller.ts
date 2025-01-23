import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminServices } from "./admin.services";

const getAllAdmins = catchAsync(async (req, res) => {
  // console.log(req.query);
  const result = await adminServices.getAllAdminsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admins retrieved successfully",
    data: result,
  });
});
const updateAdmin = catchAsync(async (req, res) => {
  const adminId = req.params.id;
  const updateData = req.body;
  const result = await adminServices.updateAdminIntoDB(adminId, updateData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin updated successfully",
    data: result,
  });
});
const deleteAdmin = catchAsync(async (req, res) => {
  const adminId = req.params.id;
  const result = await adminServices.deleteAdminFromDB(adminId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin deleted successfully",
    data: result,
  });
});

export const adminControllers = {
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
};
