import { Router, type IRouter } from "express";
import { addCategory, addItem, createMenu, deleteCategory, deleteItem, editCategoryName, editItem } from "src/controllers/inventory.controller";



const inventoryRouterConfig = Object.freeze({
  createMenu: '/createMenu',

  addCategory: '/addCategory',
  editCategory: '/editCategory',
  deleteCategory: '/deleteCategory',

  addItem: '/addItem',
  editItem: '/editItem',
  deleteItem: '/deleteItem',

  fetchMenu: '/fetchMenu'
})

export const inventoryRouter: IRouter = Router();

//For Admin's
inventoryRouter.route(`${inventoryRouterConfig.createMenu}`).post(createMenu)
inventoryRouter.route(`${inventoryRouterConfig.addCategory}`).post(addCategory)
inventoryRouter.route(`${inventoryRouterConfig.editCategory}`).post(editCategoryName)
inventoryRouter.route(`${inventoryRouterConfig.deleteCategory}`).delete(deleteCategory)
inventoryRouter.route(`${inventoryRouterConfig.addItem}`).post(addItem)
inventoryRouter.route(`${inventoryRouterConfig.editItem}`).post(editItem)
inventoryRouter.route(`${inventoryRouterConfig.deleteItem}`).delete(deleteItem)


//All data fetching api's , used for data fetching to the frontend 

//inventoryRouter.route(`${inventoryRouterConfig.fetchMenu}`).get()


