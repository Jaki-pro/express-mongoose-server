import QueryBuiler from "../../builder/QueryBuilder";
import { User } from "../User/user.model";
import { TAdmin } from "./admin.interface";
import { Admin } from "./admin.model";

const getAllAdminsFromDB = async (query: Record<string, unknown>) => {
  const adminQuery = new QueryBuiler(Admin.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();
  const result = await adminQuery.modelQuery;
  return result;
};
const updateAdminIntoDB = async (id: string, payload: Partial<TAdmin>) => {
  const { name, ...primitiveFields } = payload;
  const modifiedUpdatedData: Record<string, unknown> = { ...primitiveFields };
  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }
  //   console.log(modifiedUpdatedData);
  const result = await Admin.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
  });
  return result;
};
const deleteAdminFromDB = async (id: string) => {
  const admin = await Admin.findById(id);
  await User.findByIdAndDelete(admin?.user);
  await Admin.findByIdAndDelete(id);
  return null;
};
export const adminServices = {
  getAllAdminsFromDB,
  updateAdminIntoDB,
  deleteAdminFromDB,
};
