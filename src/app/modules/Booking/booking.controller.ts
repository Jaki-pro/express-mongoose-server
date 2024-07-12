import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBookingIntoDB(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Order placed successfully",
    data: result,
  });
});
export const BookingControllers = {
  createBooking,
};
