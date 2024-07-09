import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.createBookingIntoDB(
    req.params.productId
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Booking created successfully",
    data: result,
  });
});
export const BookingControllers = {
  createBooking,
};
