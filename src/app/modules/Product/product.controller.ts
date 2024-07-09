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
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProductsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products are retrieved successfully",
    data: result,
  });
});
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.getSingleProductFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is retrieved successfully",
    data: result,
  });
});
const updateProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.updateProductIntoDB(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is updated successfully",
    data: result,
  });
});
const deleteProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductServices.deleteProductFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product is deleted successfully",
    data: result,
  });
});
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
