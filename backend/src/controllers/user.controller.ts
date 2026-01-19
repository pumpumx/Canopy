import { asyncHandler } from "src/utils/asyncHandler";
import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from "express";
import { z } from 'zod'
import { registerUserService } from "src/services/user.service";


export const registerUserSchema = z.object({
  fullName: z.string({ error: "fullName is required" }).min(2, { error: "FullName should be atleast 2 characters" }).trim().max(30, { error: "Full Name Cannot Exceed 30 Characters" }),
  password: z.string({ error: "field is required" }).min(8, { message: "Password should be atleast 8 characters long" }),
  role: z.string().default("USER").optional(),
  email: z.email({ error: "Email is Required" }).lowercase().trim()
})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {

  console.log("Inside register user")
  const dto = registerUserSchema.parse(req.body)

  const registerUserResponse = await registerUserService(dto);

  return res.status(200)
    .cookie("accessToken", registerUserResponse.accessToken)
    .json(
      new ApiResponse(200, "User Registered Successfully", { registerUserResponse })
    )

})

export const loginUser = asyncHandler(async (req: Request, res: Response) => {

})
