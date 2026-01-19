import type { Request, Response } from "express";
import { ApiError } from "src/utils/apiError";
import * as z from 'zod'
import { registerUserSchema } from "src/controllers/user.controller";
import { User } from "src/models/user.model";

type registerUserType = z.infer<typeof registerUserSchema>
//Add two steps in user registering first , without adding the avatar pic as user registeration should be our first priority
//Second step would be a profile pic as our second priority
export const registerUserService = async (dto: registerUserType) => {

  //check for whether user with same email exists or not 

  const userExists = await User.findOne({ email: dto.email }).select("_id")

  if (userExists) {
    throw new ApiError(409, "User already Exists");
  }

  const user = await User.create({
    fullName: dto.fullName,
    email: dto.email,
    password: dto.password,
  })

  const accessToken = "1397y71824y7"
  return { accessToken }

}

