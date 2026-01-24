import type { Request, Response } from "express";
import { ApiError } from "src/utils/apiError";
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { loginUserSchema, registerUserSchema } from "src/controllers/user.controller";
import { User } from "src/models/user.model";

type registerUserType = z.infer<typeof registerUserSchema>
//Add two steps in user registering first , without adding the avatar pic as user registeration should be our first priority
//Second step would be a profile pic as our second priority
export const registerUserService = async (dto: registerUserType) => {

  //check for whether user with same email exists or not 
  const user = await User.create({
    fullName: dto.fullName,
    email: dto.email,
    password: dto.password,
    role: dto.role ?? "USER"
  })

  console.log("generating accessToken... ")
  const accessToken = user.generateAccessToken()

  return { accessToken }

}


type loginUserType = z.infer<typeof loginUserSchema>
export const loginUserService = async (dto: loginUserType) => {

  const userExists = await User.findOne({ email: dto.email }).select("password")

  if (!userExists) {
    throw new ApiError(404, "User or password is Invalid")
  }

  //check for correct password 
  const passValidation = await bcrypt.compare(dto.password, userExists.password)

  if (!passValidation) {
    throw new ApiError(404, "User or password is Invalid")
  }

  const accessToken = userExists.generateAccessToken()
  return { accessToken }
}

