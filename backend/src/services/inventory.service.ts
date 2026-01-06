import { Category, Menu } from "src/models/inventory.model";
import { ApiError } from "src/utils/apiError";
import { z } from "zod";
import { Types } from "mongoose";

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

  const menuExists = await Menu.findOne({ menuName });
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
    throw new ApiError(400, "Menu does not exists");
  }

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
