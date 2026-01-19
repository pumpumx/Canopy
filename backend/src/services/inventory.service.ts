import { Category, Item, Menu } from "src/models/inventory.model";
import { ApiError } from "src/utils/apiError";
import { z } from "zod";
import { Types } from "mongoose";
import mongoose from "mongoose";
import type { addItemSchema, deleteCategorySchema, deleteItemSchema, editCategorySchema, editItemSchema, fetchMenuSchema } from "src/controllers/inventory.controller";
const menuSchema = z.object({
  menuName: z.string().min(1).max(30),
});
const categorySchema = z.object({
  categoryName: z.string().min(1).max(30)
})


export const createMenuService = async (menuName: string) => {

  const validation = menuSchema.safeParse({ menuName });
  if (!validation.success) {
    throw new ApiError(400, "Invalid menuName");
  }

  const menuExists = await Menu.findOne({ menuName }); //Db not working
  if (menuExists) {
    throw new ApiError(409, `${menuName} already exists`);
  }

  const menu = await Menu.create({ menuName });
  return menu;

};

type categoryResponse = {
  _id: Types.ObjectId
  categoryName: string,
  menuId: Types.ObjectId
}
export const addCategoryService = async (menuName: string, categoryName: string): Promise<categoryResponse> => {

  const menuValidation = menuSchema.safeParse({ menuName })
  const categoryValidation = categorySchema.safeParse({ categoryName });

  if (!menuValidation.success) {
    throw new ApiError(400, "Invalid Menu Name");
  }
  if (!categoryValidation.success) {
    throw new ApiError(400, "Invalid Category Name");
  }
  //Create Category and then push that category 
  const menuExists = await Menu.findOne({ menuName }).select("_id");

  if (!menuExists) {
    throw new ApiError(409, "Menu does not exists");
  }

  console.log("category exists check")

  console.log("category does not found")
  const createCategory = await Category.create({
    categoryName: categoryName,
    menuId: menuExists._id,
    itemList: [],
  })

  const response: categoryResponse = {
    _id: createCategory._id,
    categoryName: categoryName,
    menuId: menuExists._id,
  }
  return response

}

type editCategoryDto = z.infer<typeof editCategorySchema>
export const editCategoryNameService = async (dto: editCategoryDto) => {

  //Find the category for that specific menu and change the name of itemList
  const menuExists = await Menu.findOne({ menuName: dto.menuName }).select("_id");

  if (!menuExists) {
    throw new ApiError(404, "Menu does not exists")
  }


  //Check whether that newCategory name already exists or not -> Edge case : handled by mongodb itself

  const updateCategory = await Category.findOneAndUpdate(
    {
      categoryName: dto.prevCategoryName,
      menuId: menuExists._id
    },
    {
      $set: { categoryName: dto.newCategoryName }
    },
    {
      new: true,
      runValidators: true
    })

  const response: editCategoryDto = {
    menuName: dto.menuName,
    prevCategoryName: dto.prevCategoryName,
    newCategoryName: dto.newCategoryName
  }
  return response

}

type deleteCategoryDto = z.infer<typeof deleteCategorySchema>

export const deleteCategoryService = async (dto: deleteCategoryDto) => {

  const menuExists = await Menu.findOne({ menuName: dto.menuName }).select("_id")

  if (!menuExists) {
    throw new ApiError(404, "Menu does not Exists")
  }

  const category = await Category.findOneAndDelete({
    categoryName: dto.categoryName,
    menuId: menuExists._id
  })

  const responseData: deleteCategoryDto = {
    menuName: dto.menuName,
    categoryName: dto.categoryName
  }

  return responseData

}

type addItemDto = z.infer<typeof addItemSchema>
type AddItemResponse = {
  itemName: string
  price: number
}

export const addItemService = async (
  dto: addItemDto
): Promise<AddItemResponse> => {

  /**
   * QUERY 1
   * Validate Menu + Category ownership in ONE DB hit
   */
  const category = await Category.findOne({
    categoryName: dto.categoryName
  })
    .populate({
      path: "menuId",
      match: { menuName: dto.menuName },
      select: "_id"
    })
    .select("_id menuId")

  // If menu mismatch OR category not found
  if (!category?.menuId) {
    throw new ApiError(404, "Menu or Category does not exist")
  }

  /**
   * QUERY 2
   * Create item (DB enforces uniqueness)
   */
  const item = await Item.create({
    itemName: dto.itemName,
    price: dto.price,
    menuId: category.menuId._id,
    categoryId: category._id
  })

  return {
    itemName: item.itemName,
    price: item.price
  }
}

type editItemDto = z.infer<typeof editItemSchema>
export const editItemService = async (dto: editItemDto): Promise<editItemDto> => {

  const categoryExists = await Category.findOne({
    categoryName: dto.categoryName
  }).populate({
    path: "menuId",
    match: { menuName: dto.menuName },
    select: "_id"
  }).select("_id");

  if (!categoryExists?.menuId) {
    throw new ApiError(404, "Menu does not exists")
  }

  const itemExists = await Item.findOneAndUpdate({
    itemName: dto.prevItemName,
    categoryId: categoryExists._id,
    menuId: categoryExists.menuId
  },
    {
      $set: {
        itemName: dto.newItemName,
        price: dto.price
      }
    }, {
    new: true,
    runValidators: true,
  })

  return dto

}

type deleteItemDto = z.infer<typeof deleteItemSchema>
export const deleteItemService = async (dto: deleteItemDto): Promise<deleteItemDto> => {
  const categoryExists = await Category.findOne({
    categoryName: dto.categoryName
  }).populate({
    path: "menuId",
    match: { menuName: dto.menuName },
    select: "_id"
  }).select("_id");

  if (!categoryExists?.menuId) {
    throw new ApiError(404, "Menu does not exists")
  }

  const itemExists = await Item.findOneAndDelete({
    itemName: dto.itemName,
    categoryId: categoryExists._id,
    menuId: categoryExists.menuId
  })

  if (!itemExists?._id) {
    throw new ApiError(404, "Item does not exists")
  }

  return dto
}

type fetchCompleteMenuDto = z.infer<typeof fetchMenuSchema>
export const fetchCompleteMenuService = async (dto: fetchCompleteMenuDto) => {

  //validate menu 
  const menuExists = await Menu.findOne({ menuName: dto.menuName }).select("_id")
  if (!menuExists) {
    throw new ApiError(404, "Menu Does not exists");
  }

  //fetch all categories and items related to that menu 


  const completeMenuFetch = await Category.aggregate([
    { $match: { menuId: menuExists._id } },
    {
      $lookup: {
        foreignField: "categoryId",
        localField: "_id",
        from: "items",
        as: "itemList"
      },
    },
    {
      $project: {
        _id: 0,
        categoryName: 1,
        itemList: {
          $map: {
            input: "$itemList",
            as: "item",
            in: {
              itemName: "$$item.itemName",
              itemPrice: "$$item.price",
              popularityScore: "$$item.popularityScore"
            }
          }
        }
      }
    }
  ])

  console.log("menu:", completeMenuFetch)

  return completeMenuFetch

}







