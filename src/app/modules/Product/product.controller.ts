import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ProductServices } from "./product.service";

const createProduct = catchAsync(async (req: Request, res: Response) => {
  // console.log("file", req.file);
  const result = await ProductServices.createProductIntoDB(req.body, req.file);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product created successfully",
    data: result,
  });
});
export const ProductControllers = {
  createProduct,
};
