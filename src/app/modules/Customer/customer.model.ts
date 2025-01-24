import { model, Schema } from "mongoose";
import { TCustomer } from "./customer.interface";

const CustomerSchema = new Schema<TCustomer>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to another model (e.g., User model)
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
export const Customer = model<TCustomer>("Customer", CustomerSchema);
