import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      validate: {
        validator: Number.isInteger,
        message: "{VALUE} is not an integer value for stock",
      },
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Product = model<TProduct>("Product", productSchema);
