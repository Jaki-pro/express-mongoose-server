import { z } from "zod";

const adminValidationSchema = z.object({
  body: z.object({
    user: z.string().refine((val) => /^[a-fA-F0-9]{24}$/.test(val), {
      message: "Invalid ObjectId",
    }), // Validates as a MongoDB ObjectId
    email: z.string().email("Invalid email address").trim(),
    name: z.object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
    }),
    gender: z.enum(["male", "female", "other"], {
      message: "Gender must be 'male', 'female', or 'other'",
    }),
    contactNo: z
      .string()
      .min(10, "Contact number must be at least 10 digits")
      .max(15, "Contact number must not exceed 15 digits")
      .regex(/^\+?[0-9]{10,15}$/, "Invalid contact number format"),
    isDeleted: z.boolean().optional(), // Optional field
  }),
});
export const AdminValidatons = {
  adminValidationSchema,
};
