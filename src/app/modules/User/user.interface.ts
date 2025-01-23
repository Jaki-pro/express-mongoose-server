export interface TUser {
  email: string;
  password: string;
  role: "admin" | "customer";
  isDeleted: boolean;
}
