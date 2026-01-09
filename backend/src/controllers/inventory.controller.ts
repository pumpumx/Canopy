import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from 'express'
import { asyncHandler } from "src/utils/asyncHandler";
import { addCategoryService, createMenuService, editCategoryNameService } from "src/services/inventory.service";
import { ApiError } from "src/utils/apiError";
import * as z from 'zod'


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

  const categoryResponse = await addCategoryService(menuName, categoryName);
  console.log(categoryResponse)
  return res
    .status(200)
    .json(
      new ApiResponse(200, "Categoried Added Successfully", categoryResponse),
    )
})

export const editCategorySchema = z.object({
  menuName: z.string().trim().min(1).max(30),
  prevCategoryName: z.string().trim().min(1).max(30),
  newCategoryName: z.string().trim().min(1).max(30)
})

export const editCategoryName = asyncHandler(async (req: Request, res: Response) => {

  const dto = editCategorySchema.parse(req.body)

  const editCategoryNameResponse = await editCategoryNameService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Category Updated Successfully", editCategoryNameResponse)
  )
})
