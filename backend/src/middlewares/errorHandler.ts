
// middlewares/globalErrorHandler.ts
//
import type { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/apiError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;

  // Default values
  if (!(error instanceof ApiError)) {
    error = new ApiError(500, "Internal Server error");
  }

  // DEVELOPMENT
  if (process.env.NODE_ENV === "development") {
    return res.status(error.status).json({
      status: error.status,
      message: error.message,
      stack: err.stack,
      error: err,
    });
  }

  // PRODUCTION
  if (process.env.NODE_ENV === "production") {
    return res.status(error.status).json({
      status: error.status,
      message: error.isOperational
        ? error.message
        : "Something went wrong",
    });
  }
};
