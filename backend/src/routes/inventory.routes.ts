import { Router, type IRouter } from "express";
import { addCategory, addItem, createMenu, deleteCategory, deleteItem, editCategoryName, editItem, fetchCompleteMenu } from "src/controllers/inventory.controller";
import { verifyJWT } from "src/middlewares/verifyJWT";



const inventoryRouterConfig = Object.freeze({
  addMenu: '/addMenu',

  addCategory: '/addCategory',
  editCategory: '/editCategory',
  deleteCategory: '/deleteCategory',

  addItem: '/addItem',
  editItem: '/editItem',
  deleteItem: '/deleteItem',

  fetchMenu: '/fetchMenu',
  fetchAllMenus: '/fetchAllMenus'
})

export const inventoryRouter: IRouter = Router();

//For Admin's
inventoryRouter.route(`${inventoryRouterConfig.addMenu}`).post(verifyJWT, createMenu)
inventoryRouter.route(`${inventoryRouterConfig.addCategory}`).post(verifyJWT, addCategory)
inventoryRouter.route(`${inventoryRouterConfig.editCategory}`).post(verifyJWT, editCategoryName)
inventoryRouter.route(`${inventoryRouterConfig.deleteCategory}`).delete(verifyJWT, deleteCategory)
inventoryRouter.route(`${inventoryRouterConfig.addItem}`).post(verifyJWT, addItem)
inventoryRouter.route(`${inventoryRouterConfig.editItem}`).post(verifyJWT, editItem)
inventoryRouter.route(`${inventoryRouterConfig.deleteItem}`).delete(verifyJWT, deleteItem)


//All data fetching api's , used for data fetching to the frontend 

inventoryRouter.route(`${inventoryRouterConfig.fetchMenu}`).get(verifyJWT, fetchCompleteMenu)
inventoryRouter.route(`${inventoryRouterConfig.fetchAllMenus}`).get(verifyJWT, fetchCompleteMenu)


