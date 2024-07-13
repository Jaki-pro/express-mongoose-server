/* eslint-disable no-console */
import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import config from "../config";
import streamifier from "streamifier";
type CloudinaryUploadResponse = {
  secure_url: string;
  public_id?: string;
  url?: string;
};
cloudinary.config({
  cloud_name: config.cloudinary_cloud_name,
  api_key: config.cloudinary_api_key,
  api_secret: config.cloudinary_api_secret,
});
export const sendImageToCloudinary = async (
  buffer: Buffer,
  imageName: string
): Promise<CloudinaryUploadResponse> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { public_id: imageName },
      (error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
    streamifier.createReadStream(buffer).pipe(uploadStream);
  });
};
const storage = multer.memoryStorage();

export const upload = multer({ storage: storage });
