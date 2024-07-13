import { model, Schema } from "mongoose";
export type TContact = {
  name: string;
  email: string;
  message: string;
};
const contactSchema = new Schema<TContact>({
  name: { type: "string", required: true, trim: true },
  email: { type: "string", required: true, trim: true },
  message: { type: "string", required: true, trim: true },
});
export const Contact = model<TContact>("Contact", contactSchema);
