import { Types } from "mongoose";

export type TBooking = {
  productId: Types.ObjectId;
  name: string;
  brand: string;
  stock: number;
  price: number;
  image: string;
  booked: number;
  subTotalPrice: number;
  totalPrice: number;
};
