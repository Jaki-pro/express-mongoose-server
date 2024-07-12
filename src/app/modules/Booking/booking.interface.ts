import { Types } from "mongoose";

export type TBooking = {
  productId: Types.ObjectId;
  title: string;
  customerName: string;
  customerEmail: string;
  customerNumber: string;
  customerAddress: string;
  price: number;
  quantity: number;
  subTotalPrice: number;
  vat: number;
  totalPrice: number;
};
