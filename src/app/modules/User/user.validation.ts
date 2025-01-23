import { z } from "zod";

const userValidationSchema = z.object({
  email: z.string().email("Invalid email address").trim(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["admin", "customer"], {
    message: "Role must be either 'admin' or 'customer'",
  }),

  isDeleted: z.boolean().optional(), // Optional if you don't always pass it
});
export const userValidations = {
  userValidationSchema,
};
