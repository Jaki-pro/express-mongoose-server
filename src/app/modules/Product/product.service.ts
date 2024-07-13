import QueryBuiler from "../../builder/QueryBuilder";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Create a new product
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProductIntoDB = async (payload: Partial<TProduct>, file: any) => {
  let imageName = payload?.name;
  imageName = imageName?.split(" ").join("-");
  imageName = `${payload?.category?.split(" ").join("-")}-${imageName}`;
  const uploadResult = await sendImageToCloudinary(file.buffer, imageName);
  // console.log(uploadResult);
  // return null;
  payload.image = uploadResult?.secure_url;
  const result = await Product.create(payload);
  return result;
};

//retrieve all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = ["name"];
  const productsQuery = new QueryBuiler(Product.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate();
  const result = await productsQuery.modelQuery;
  return result;
};
// retrieve single product
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProductIntoDB = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
