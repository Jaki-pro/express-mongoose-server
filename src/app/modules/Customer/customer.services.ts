import QueryBuiler from "../../builder/QueryBuilder";
import { User } from "../User/user.model";
import { TCustomer } from "./customer.interface";
import { Customer } from "./customer.model";

const getAllCustomersFromDB = async (query: Record<string, unknown>) => {
  const customerQuery = new QueryBuiler(Customer.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await customerQuery.modelQuery;
  return result;
};
const updateCustomerIntoDB = async (
  id: string,
  payload: Partial<TCustomer>
) => {
  const { name, ...primitiveFields } = payload;
  const modifiedUpdatedData: Record<string, unknown> = { ...primitiveFields };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  //   console.log(modifiedUpdatedData);
  const result = await Customer.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
  });
  return result;
};
const deleteCustomerFromDB = async (id: string) => {
  const admin = await Customer.findById(id);
  await User.findByIdAndDelete(admin?.user);
  await Customer.findByIdAndDelete(id);
  return null;
};
export const customerServices = {
  getAllCustomersFromDB,
  updateCustomerIntoDB,
  deleteCustomerFromDB,
};
