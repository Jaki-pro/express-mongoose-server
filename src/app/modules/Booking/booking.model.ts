import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    productId: { type: Schema.Types.ObjectId, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    customerName: { type: String, required: true, trim: true },
    customerEmail: { type: String, required: true, trim: true },
    customerNumber: { type: String, required: true, trim: true },
    customerAddress: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true },
    subTotalPrice: { type: Number, required: true },
    vat: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
export const Booking = model<TBooking>("Booking", bookingSchema);
