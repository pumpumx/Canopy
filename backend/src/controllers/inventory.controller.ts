import { ApiResponse } from "src/utils/apiResponse";
import type { Request, Response } from 'express'
import { asyncHandler } from "src/utils/asyncHandler";
import { addCategoryService, addItemService, createMenuService, deleteItemService, deleteCategoryService, editCategoryNameService, editItemService, fetchCompleteMenuService, fetchAllMenusService } from "src/services/inventory.service";
import { ApiError } from "src/utils/apiError";
import type { userDecodedToken } from "src/types/express";
import type { JwtPayload } from "jsonwebtoken";
import * as z from 'zod'


//Add authorization via jwt middleware at last 
//Any field value coming from the frontend will be converted into lowercase
//All these Routes will be protected routes ,

export const createMenuSchema = z.object({
  menuName: z.string().min(1).max(30).toLowerCase(),
  createdAt: z.string().optional(),
  user: z.custom<userDecodedToken>(),
})

export const createMenu = asyncHandler(async (req: Request, res: Response) => {

  const user = req.user;
  if (!user) {
    throw new ApiError(404, "Unauthorized Request")
  }

  const dto = createMenuSchema.parse(req.body)
  dto.user = user as userDecodedToken;
  const createMenuResponse = await createMenuService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Menu Created Successfully", { createMenuResponse })
  )
})

export const fetchAllMenus = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user
  if (!user) {
    throw new ApiError(404, "Unauthorized user")
  }
  const fetchAllMenusResponse = await fetchAllMenusService(user);

  return res.status(200).json(
    new ApiResponse(200, "Menus Fetched Successfully", { data: fetchAllMenusResponse })
  )
})


export const addCategorySchema = z.object({
  categoryName: z.string().min(1).max(30).toLowerCase().trim(),
  menuName: z.string().min(1).max(30).toLowerCase().trim()
})
export const addCategory = asyncHandler(async (req: Request, res: Response) => {

  const dto = addCategorySchema.parse(req.body)
  const categoryResponse = await addCategoryService(dto.menuName, dto.categoryName);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Categoried Added Successfully", categoryResponse),
    )
})

export const editCategorySchema = z.object({
  menuName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  prevCategoryName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  newCategoryName: z.string().trim().min(1).max(30).toLowerCase().trim()
})

export const editCategoryName = asyncHandler(async (req: Request, res: Response) => {

  const dto = editCategorySchema.parse(req.body)

  const editCategoryNameResponse = await editCategoryNameService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Category Updated Successfully", editCategoryNameResponse)
  )
})

export const deleteCategorySchema = z.object({
  menuName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  categoryName: z.string().trim().min(1).max(30).toLowerCase().trim(),
})
export const deleteCategory = asyncHandler(async (req: Request, res: Response) => {
  const dto = deleteCategorySchema.parse(req.body)

  const deleteCategoryServiceResponse = await deleteCategoryService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Category Deleted Successfully", deleteCategoryServiceResponse)
  )
})

export const addItemSchema = z.object({
  menuName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  categoryName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  itemName: z.string().trim().min(1).max(30).toLowerCase().trim(),
  price: z.coerce.number()
})
export const addItem = asyncHandler(async (req: Request, res: Response) => {
  const dto = addItemSchema.parse(req.body)
  const addItemResponse = await addItemService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Item added successfully", addItemResponse)
  )
})

export const editItemSchema = z.object({
  menuName: z.string().min(1).max(30).toLowerCase().trim(),
  categoryName: z.string().min(1).max(30).toLowerCase().trim(),
  prevItemName: z.string().min(1).max(30).toLowerCase().trim(),
  newItemName: z.string().min(1).max(30).toLowerCase().trim(),
  price: z.coerce.number().min(1).max(30).optional()
})

export const editItem = asyncHandler(async (req: Request, res: Response) => {
  const dto = editItemSchema.parse(req.body);
  const editItemResponse = await editItemService(dto);

  return res.status(200).json(
    new ApiResponse(200, "Item deleted Successfully", editItemResponse)
  )
})


export const deleteItemSchema = z.object({
  menuName: z.string().min(1).max(30).toLowerCase().trim(),
  categoryName: z.string().min(1).max(30).toLowerCase().trim(),
  itemName: z.string().min(1).max(30).toLowerCase().trim(),
})

export const deleteItem = asyncHandler(async (req: Request, res: Response) => {
  const dto = deleteItemSchema.parse(req.body)

  const deleteItemResponse = await deleteItemService(dto)

  return res.status(200).json(
    new ApiResponse(200, "Item deleted Successfully", deleteItemResponse)
  )
})


export const fetchMenuSchema = z.object({
  menuName: z.string().trim().min(1).max(30).lowercase()
})

export const fetchCompleteMenu = asyncHandler(async (req: Request, res: Response) => {
  const dto = fetchMenuSchema.parse(req.query)
  const fetchMenuResponse = await fetchCompleteMenuService(dto);
  return res.status(200).json(
    new ApiResponse(200, "Menu Fetched Successfully", fetchMenuResponse)
  )
})





