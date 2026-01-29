import { JwtPayload } from "jsonwebtoken";
import jwt from 'jsonwebtoken'


export type userDecodedToken = {
  userId: string,
  role: string,
}


declare global {
  namespace Express {
    interface Request {
      user?: userDecodedToken | JwtPayload | string | null;
    }
  }
}
