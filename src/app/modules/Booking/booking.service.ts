import { Product } from "../Product/product.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (payload: TBooking) => {
  await Product.findByIdAndUpdate(
    payload.productId,
    {
      $inc: { stock: -payload.quantity },
    },
    { new: true, runValidators: true }
  );
  const result = await Booking.create(payload);
  return result;
};
export const BookingServices = {
  createBookingIntoDB,
};
