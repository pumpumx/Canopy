import { Router } from "express";
import type { IRouter } from "express";
import { idempotencyCheck } from "src/middlewares/idempotencyCheck";
import { verifyJWT } from "src/middlewares/verifyJWT";

const orderRoutes = {
  placeOrder: '/placeOrder'
}

export const orderRouter: IRouter = Router()

orderRouter.route(`${orderRoutes.placeOrder}`).post(idempotencyCheck,)



