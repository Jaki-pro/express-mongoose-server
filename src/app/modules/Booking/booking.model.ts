import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    productId: { type: Schema.Types.ObjectId, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true },
    stock: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value for stock",
      },
    },
    price: { type: Number, required: true, min: 0 },
    image: { type: String, required: true },
    booked: { type: Number, required: true },
    subTotalPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
export const Booking = model<TBooking>("Booking", bookingSchema);
