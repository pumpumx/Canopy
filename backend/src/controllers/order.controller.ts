import type { Request, Response } from "express"
import type { JwtPayload } from "jsonwebtoken"
import { placeOrderService } from "src/services/order.services"
import type { userDecodedToken } from "src/types/express"
import { ApiError } from "src/utils/apiError"
import { ApiResponse } from "src/utils/apiResponse"
import z from "zod"


export const placeOrderSchema = z.object({
  orderNumber: z.string(),
  user: z.custom<userDecodedToken>(),
  idempotentKey: z.string(),//will implement this thing in the future
  menuName: z.string({ error: "Invalid menu name" }).trim().toLowerCase(),
  orderSource: z.string().trim().toUpperCase().default("COUNTER"),
  orderType: z.string().trim().toUpperCase().default("DINE_IN"),
  status: z.string().trim().toUpperCase().default("CREATED"),
  totalAmount: z.coerce.number().min(0, { error: "Total Amount cannot be negative" }),
})
export const placeOrderController = async (req: Request, res: Response) => {

  const user = req.user
  if (!user) {
    throw new ApiError(404, "Unuthorized access")
  }
  const placeOrderDto = placeOrderSchema.parse(req.body); //every incoming data is parsed on the edge
  placeOrderDto.user = user
  const orderServiceRespone = await placeOrderService(placeOrderDto);

  return res.status(200).json(
    new ApiResponse(200, "Order Created successfully", orderServiceRespone)
  )


} 
