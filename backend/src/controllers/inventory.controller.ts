import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from 'express'
import { asyncHandler } from "src/utils/asyncHandler";
import { createMenuService } from "src/services/inventory.service";

export const createMenu = asyncHandler(async (req: Request, res: Response) => {
  const menuName: string = req.body.menuName;

  const menu = await createMenuService(menuName);

  return res.status(200).json(
    new ApiResponse(200, "Menu Created Successfully", menu)
  )
})
