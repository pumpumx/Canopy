import { Menu } from "src/models/inventory.model";
import { ApiError } from "src/utils/apiError";
import z from 'zod'


const menuSchema = z.object({
  menuName: z.string().min(0).max(30)
})


export const createMenuService = async (menuName: string) => {

  const menuValidation = menuSchema.safeParse({ menuName })
  if (!menuValidation.success) {
    throw new ApiError(400, "Invalid menuName")
  }
  //checking for existing menu
  const menuExists = await Menu.findOne({ menuName });
  if (menuExists) {
    throw new ApiError(409, `${menuName} already exists`)
  }

  const menu = await Menu.create({ //.create -> automatically saves the doc to the db
    menuName: menuName
  })

  return menu;
}
