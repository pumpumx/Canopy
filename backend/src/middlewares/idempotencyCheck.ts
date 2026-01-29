import { redisClient } from "src";
import type { NextFunction, Request, Response } from "express";
import { asyncHandler } from "src/utils/asyncHandler";
import { ApiResponse } from "src/utils/apiResponse";
import { keyBuilder } from "src/infra/redis/keyBuilder";
import { redisState, redisTTL } from "src/infra/redis/redisConfigs";

export const idempotencyCheck = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

  const { idempotentId } = req.body
  //check in redis , via trying to accquire ownership in redis

  const idemopotentKey = keyBuilder.orderIdempotentKey(idempotentId);

  const redisRes = redisClient.set(idempotentId, redisState.PROCESSING, { condition: "NX", expiration: { type: 'EX', value: redisTTL.ORDER_TTL })

  return res.status(409).json(
  )
})

