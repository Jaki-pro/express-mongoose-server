import { Admin } from "../Admin/admin.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (payload: TUser) => {
  const userData = {
    email: payload.email,
    password: payload.password,
    isDeleted: false,
    role: "admin",
  };
  const newUser = await User.create(userData);
  const userObjectId = newUser._id;
  const newAdmin = await Admin.create({ user: userObjectId, ...payload });
  return newAdmin;
};
//console.log("hello");
export const UserServices = {
  createAdminIntoDB,
};
