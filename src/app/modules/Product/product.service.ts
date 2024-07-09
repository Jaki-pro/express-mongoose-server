import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createProductIntoDB = async (payload: Partial<TProduct>, file: any) => {
  let imageName = payload?.name;
  imageName = imageName?.split(" ").join("-");
  imageName = `${payload?.category?.split(" ").join("-")}-${imageName}`;
  // console.log("imageName", imageName);
  const uploadResult = await sendImageToCloudinary(imageName, file?.path);
  payload.image = uploadResult?.secure_url;
  const result = await Product.create(payload);
  return result;
};
export const ProductServices = {
  createProductIntoDB,
};
