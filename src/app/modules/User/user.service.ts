import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Admin } from "../Admin/admin.model";
import { Customer } from "../Customer/customer.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (payload: TUser) => {
  const userData = {
    email: payload.email,
    password: payload.password,
    isDeleted: false,
    role: "admin",
  };
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) {
    throw new Error("User already exists");
  }
  const newUser = await User.create(userData);
  const userObjectId = newUser._id;
  const newAdmin = await Admin.create({ user: userObjectId, ...payload });
  return newAdmin;
};

const createCustomerIntoDB = async (payload: Partial<TUser>) => {
  const userData = {
    email: payload.email,
    password: payload.password,
    isDeleted: false,
    role: "customer",
  };
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) {
    throw new AppError(409, "User already exists");
  }
  const newUser = await User.create(userData);
  const userObjectId = newUser._id;
  const newCustomer = await Customer.create({ user: userObjectId, ...payload });
  return newCustomer;
};
//console.log("hello");
export const UserServices = {
  createAdminIntoDB,
  createCustomerIntoDB,
};
