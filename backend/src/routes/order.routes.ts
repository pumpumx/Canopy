import { Router } from "express";
import type { IRouter } from "express";

const orderRoutes = {
  placeOrder: '/placeOrder'
}

export const orderRouter: IRouter = Router()

orderRouter.route(`${orderRoutes.placeOrder}`).post()



