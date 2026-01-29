import type { Request, Response, NextFunction } from "express";
import type { userReq } from "src/middlewares/verifyJWT";

type AsyncController = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const asyncHandler =
  (fn: AsyncController) =>
    (req: Request | userReq, res: Response, next: NextFunction) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };

