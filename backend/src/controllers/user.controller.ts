import { asyncHandler } from "src/utils/asyncHandler";
import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from "express";
import { z } from 'zod'
import { loginUserService, registerUserService } from "src/services/user.service";
import { ApiError } from "src/utils/apiError";


export const registerUserSchema = z.object({
  fullName: z.string({ error: "fullName is required" }).min(2, { error: "FullName should be atleast 2 characters" }).trim().max(30, { error: "Full Name Cannot Exceed 30 Characters" }),
  password: z.string({ error: "field is required" }).min(8, { message: "Password should be atleast 8 characters long" }),
  role: z.string().default("USER").optional(),
  email: z.email({ error: "Email is Required" }).lowercase().trim()
})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {

  console.log("Inside register user")
  const dto = registerUserSchema.parse(req.body)
  console.log("yo user parsed")

  const registerUserResponse = await registerUserService(dto);

  return res.status(200)
    .cookie("accessToken", registerUserResponse.accessToken)
    .json(
      new ApiResponse(200, "User Registered Successfully", { success: true, email: dto.email, fullName: dto.fullName })
    )
})

export const loginUserSchema = z.object({
  email: z.email({ error: "Email is Required" }).lowercase().trim(),
  password: z.string({ error: "Invalid pass format" }).min(8)
})
export const loginUser = asyncHandler(async (req: Request, res: Response) => {

  const dto = loginUserSchema.parse(req.body)

  const loginUserResponse = await loginUserService(dto) //Returns access Token

  return res.cookie("accessToken", loginUserResponse.accessToken)
    .json(
      new ApiResponse(200, "User Logged in successfully",)
    )
})

export const verifyUser = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user;

  if (!user) {
    throw new ApiError(404, "Unauthorized User");
  }

  return res.status(200).json(
    new ApiResponse(200, "User Authorized", { success: true })
  )
})
