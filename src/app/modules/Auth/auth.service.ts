import jwt from "jsonwebtoken";
import { User } from "../User/user.model";
import { TLoginUser } from "./auth.interface";
import config from "../../config";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user exists
  // const user = await User.isUserExistsByCustomId(payload?.id);
  const user = await User.findOne({ email: payload?.email });
  if (!user) {
    // custom static method
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  if (user?.password !== payload?.password) {
    throw new AppError(httpStatus.NOT_FOUND, "Incorrect password");
  }
  //   checking if the user is already deleted
  if (user?.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted");
  }

  // checking if the user is already blocked
  // if (user?.status === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'User is already blocked');
  // }

  //   // checking if the user password is correct
  //   const isPasswordMatched = await bcrypt.compare(
  //     payload?.password,
  //     isUserExists?.password,
  //   );
  // if (
  //   !(await User.isPasswordMatched(payload?.password, user?.password as string))
  // ) {
  //   throw new AppError(httpStatus.FORBIDDEN, 'Password is incorrect');
  // }
  // Create Token and send to the client
  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string);
  // createToken(
  //   jwtPayload,
  //   config.jwt_access_secret as string, // from env
  //   config.access_token_expires_in as string, // from env
  // );

  const refreshToken = jwt.sign(jwtPayload, config.jwt_access_secret as string);
  return {
    accessToken,
    refreshToken,
    //needsPasswordChange: user?.needsPasswordChange,
  };
};
export const AuthServices = {
  loginUser,
};
