import type { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { env } from 'src/config/envConfig';
import type { userDecodedToken } from 'src/types/express';
import { ApiError } from 'src/utils/apiError';
import { asyncHandler } from 'src/utils/asyncHandler'


export const verifyJWT = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    throw new ApiError(400, "Bad Request: AccessToken not found")
  }

  //verifyThis accessToken
  const decodedVerifiedToken = jwt.verify(accessToken, env.access_token_key);

  if (!decodedVerifiedToken) {
    throw new ApiError(404, "Unauthorized User")
  }

  console.log(decodedVerifiedToken)
  req.user = decodedVerifiedToken as userDecodedToken
  next()
})
