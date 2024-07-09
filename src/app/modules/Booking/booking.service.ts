import { Types } from "mongoose";
import { Product } from "../Product/product.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (productId: string) => {
  const isAlreadyBooked = await Booking.findOne({ productId });
  const product = await Product.findById(productId);
  let subTotalPrice;
  let totalPrice;

  if (isAlreadyBooked) {
    subTotalPrice = isAlreadyBooked?.price * (isAlreadyBooked?.booked + 1);
    const result = await Booking.findOneAndUpdate(
      { productId: productId },
      {
        $inc: { booked: 1 },
        subTotalPrice: subTotalPrice,
        totalPrice: subTotalPrice + subTotalPrice * (15 / 100),
      },
      { new: true, runValidators: true }
    );
    return result;
  }
  const price = product?.price as number;
  const newBooking: TBooking = {
    productId: new Types.ObjectId(productId),
    name: product?.name as string,
    brand: product?.brand as string,
    stock: product?.stock as number,
    price: price,
    image: product?.image as string,
    booked: 1,
    subTotalPrice: price,
    totalPrice: price + price * (15 / 100),
  };
  const result = await Booking.create(newBooking);
  return result;
};
export const BookingServices = {
  createBookingIntoDB,
};
