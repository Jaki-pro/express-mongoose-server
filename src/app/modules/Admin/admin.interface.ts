import { Types } from "mongoose";

export type TAdmin = {
  user: Types.ObjectId;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female" | "other"; // Use specific options if applicable
  contactNo: string;
  isDeleted?: boolean;
};
