import { apiFeature, mainApi } from "../../../config/apiConfig"
import z from 'zod'
import axios from 'axios'

export const userApi = `${mainApi}${apiFeature.user}`
export const userApiRoute = {
  registerUser: `${userApi}/registerUser`,
  loginUser: `${userApi}/loginUser`,
  verifyUser: `${userApi}/verifyUser`
}

const userApiClient = axios.create({
  baseURL: `${userApi}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})

export const registerUserSchema = z.object({
  fullName: z.string({ error: "fullName is required" }).min(2, { error: "FullName should be atleast 2 characters" }).trim().max(30, { error: "Full Name Cannot Exceed 30 Characters" }),
  password: z.string({ error: "field is required" }).min(8, { message: "Password should be atleast 8 characters long" }),
  role: z.string().default("USER").optional(),
  email: z.email({ error: "Email is Required" }).lowercase().trim()
})

export type registerUserType = z.infer<typeof registerUserSchema>

export const registerUser = async (data: registerUserType) => {

  const dto = registerUserSchema.parse(data);
  const registerUserResponse = await userApiClient.post(`${userApiRoute.registerUser}`, dto);
  return registerUserResponse.data

}


