import type { placeOrderSchema } from "src/controllers/order.controller"
import { ApiError } from "src/utils/apiError";
import { Menu } from "src/models/inventory.model";
import { Order } from "src/models/order.model";
import z from "zod"

//---------------------------------------------------Order Business LOGIC------------------------------------------------------------
type placeOrderServiceDto = z.infer<typeof placeOrderSchema>
type placeOrderResponse = {
  status: "SUCCESS",
  data: any
}
export const placeOrderService = async (dto: placeOrderServiceDto): Promise<placeOrderResponse> => {

  const user = dto.user;

  if (!user.userId) {
    throw new ApiError(404, "Unauthorized Request");
  }

  const menuExists = await Menu.findOne({ menuName: dto.menuName }).select("_id");
  if (!menuExists) {
    throw new ApiError(409, "Menu does not Exists")
  }

  const createOrder = await Order.create({
    menuId: menuExists?._id,
    orderType: dto.orderType,
    orderSource: dto.orderSource,
    status: dto.status,
    userId: user.userId,
    totalAmount: dto.totalAmount,
    orderNumber: dto.orderNumber,
    idempotentKey: dto.idempotentKey,
  })


}
