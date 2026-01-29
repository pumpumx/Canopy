import type { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { env } from 'src/config/envConfig';
import { ApiError } from 'src/utils/apiError';
import { asyncHandler } from 'src/utils/asyncHandler'



export const verifyJWT = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const { accessToken } = req.cookies.accessToken;

  //verifyThis accessToken
  const decodedVerifiedToken = jwt.verify(accessToken, env.access_token_key);

  if (!decodedVerifiedToken) {
    throw new ApiError(404, "Unauthorized User")
  }
  req.user = decodedVerifiedToken
  next()
})
