import type { Request, Response } from "express"
import { placeOrderService } from "src/services/order.services"
import type { userDecodedToken } from "src/types/express"
import z from "zod"


export const placeOrderSchema = z.object({
  orderNumber: z.string(),
  user: z.custom<userDecodedToken>(),
  idempotentKey: z.string(),//will implement this thing in the future
  menuName: z.string({ error: "Invalid menu name" }).trim().toLowerCase(),
  orderSource: z.string().trim().toUpperCase().default("COUNTER"),
  orderType: z.string().trim().toUpperCase().default("DINE_IN"),
  status: z.string().trim().toUpperCase().default("CREATED"),
  totalAmount: z.number().min(0, { error: "Total Amount cannot be negative" }),
})
export const placeOrderController = async (req: Request, res: Response) => {

  const placeOrderDto = placeOrderSchema.parse(req.body); //every incoming data is parsed on the edge

  const orderServiceRespone = await placeOrderService(placeOrderDto);



} 
