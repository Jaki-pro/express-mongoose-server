import { Types } from "mongoose";

export type TCustomer = {
  user: Types.ObjectId;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  isDeleted?: boolean;
};
