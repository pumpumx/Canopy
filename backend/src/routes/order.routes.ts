import { Router } from "express";
import type { IRouter } from "express";
import { placeOrderController } from "src/controllers/order.controller";
import { verifyJWT } from "src/middlewares/verifyJWT";

const orderRoutes = {
  placeOrder: '/placeOrder'
}

export const orderRouter: IRouter = Router()

orderRouter.route(`${orderRoutes.placeOrder}`).post(verifyJWT, placeOrderController)



