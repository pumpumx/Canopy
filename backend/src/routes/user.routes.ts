import { Router } from "express";
import type { IRouter } from "express";
import { loginUser, registerUser, verifyUser } from "src/controllers/user.controller";
import { verifyJWT } from "src/middlewares/verifyJWT";



const routerConfig = {
  registerUser: '/registerUser',
  loginUser: '/loginUser',
  verifyUser: '/verifyUser' //can make all routes protected at backend itself in order to save compute cost
}

export const userRouter: IRouter = Router()

userRouter.route(`${routerConfig.registerUser}`).post(registerUser)
userRouter.route(`${routerConfig.loginUser}`).post(loginUser)
userRouter.route(`${routerConfig.verifyUser}`).post(verifyJWT, verifyUser)

