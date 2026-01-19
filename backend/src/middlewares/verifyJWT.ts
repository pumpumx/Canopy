import type { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import { env } from 'src/config/envConfig';
import { ApiError } from 'src/utils/apiError';
import { asyncHandler } from 'src/utils/asyncHandler'

interface userReq extends Request {
  user: string | jwt.JwtPayload | null
}

export const verifyJWT = (async (req: userReq, res: Response, next: NextFunction) => {
  try {
    const { accessToken } = req.cookies.accessToken;

    //verifyThis accessToken
    const verifyAccessToken = jwt.verify(accessToken, env.access_token_key);

    if (!verifyAccessToken) {
      throw new ApiError(404, "Unauthorized User")
    }

    const decodedToken = jwt.decode(accessToken)

    req.user = decodedToken;
    next()

  } catch (error) {
    next(error)
  }

})
