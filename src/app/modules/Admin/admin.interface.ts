import { Types } from "mongoose";

export type TAdmin = {
  user: Types.ObjectId;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
  isDeleted?: boolean;
};
