import { z } from "zod";

const customerValidationSchema = z.object({
  body: z.object({
    user: z.string().refine((val) => /^[a-fA-F0-9]{24}$/.test(val), {
      message: "Invalid ObjectId",
    }), // Validates as a MongoDB ObjectId
    email: z.string().email("Invalid email address").trim(),
    name: z.object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
    }),
    isDeleted: z.boolean().optional(), // Optional field
  }),
});
export const CustomerValidatons = {
  customerValidationSchema,
};
