import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from 'express'
import { asyncHandler } from "src/utils/asyncHandler";
import { addCategoryService, createMenuService } from "src/services/inventory.service";
import { ApiError } from "src/utils/apiError";

//Add authorization via jwt middleware at last 
export const createMenu = asyncHandler(async (req: Request, res: Response) => {
  const menuName: string = req.body.menuName;

  const menu = await createMenuService(menuName);

  return res.status(200).json(
    new ApiResponse(200, "Menu Created Successfully", menu)
  )
})


export const addCategory = asyncHandler(async (req: Request, res: Response) => {
  const { categoryName, menuName } = req.body;

  const category = await addCategoryService(menuName, categoryName);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Categoried Added Successfully", { _id: category?._id || null, name: categoryName }),
    )
})
