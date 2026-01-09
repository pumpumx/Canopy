import { Router, type IRouter } from "express";
import { addCategory, createMenu, editCategoryName } from "src/controllers/inventory.controller";



const inventoryRouterConfig = Object.freeze({
  createMenu: '/createMenu',

  addCategory: '/addCategory',
  editCategory: '/editCategory',
  deleteCategory: '/deleteCategory',

  addItem: '/addItem',
  editItem: '/editItem',
  deleteItem: '/deleteItem',

})

export const inventoryRouter: IRouter = Router();

inventoryRouter.route(`${inventoryRouterConfig.createMenu}`).post(createMenu)
inventoryRouter.route(`${inventoryRouterConfig.addCategory}`).post(addCategory)
inventoryRouter.route(`${inventoryRouterConfig.editCategory}`).post(editCategoryName)
inventoryRouter.route(`${inventoryRouterConfig.deleteCategory}`)
inventoryRouter.route(`${inventoryRouterConfig.addItem}`)
inventoryRouter.route(`${inventoryRouterConfig.editItem}`)
inventoryRouter.route(`${inventoryRouterConfig.deleteItem}`)


