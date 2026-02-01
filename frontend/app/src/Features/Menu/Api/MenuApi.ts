import axios from "axios";
import { mainApi, apiFeature } from "../../../config/apiConfig";
import z from 'zod'

const menuApiRoute = {
  fetchAllMenus: '/fetchAllMenus',
  addMenu: '/addMenu'
}

const menuApiClient = axios.create({
  baseURL: `${mainApi}${apiFeature.menu}`,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
})


//------------------------------------------------MENU API-------------------------------------------------


export const fetchAllMenus = async () => {
  const fetchAllMenusResponse = await menuApiClient.get(`${menuApiRoute.fetchAllMenus}`);
  return fetchAllMenusResponse.data
}

const addMenuSchema = z.object({
  menuName: z.string().min(1).max(30).trim().toLowerCase(),
  createdAt: z.string().optional()
})
type addMenuType = z.infer<typeof addMenuSchema>
export const addMenu = async (userData: addMenuType) => {

  const dto = addMenuSchema.parse(userData)
  const addMenuResponse = await menuApiClient.post(`${menuApiRoute.addMenu}`, dto)
  return addMenuResponse.data
}


