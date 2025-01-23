import { model, Schema, Types } from "mongoose";
import { TAdmin } from "./admin.interface";

const AdminSchema = new Schema<TAdmin>(
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
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
      trim: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);
export const Admin = model<TAdmin>("Admin", AdminSchema);
