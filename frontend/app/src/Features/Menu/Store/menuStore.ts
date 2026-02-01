import { create } from "zustand";
import type { Menu } from "../Pages/MenuCard";

export interface MenuState {
  menuList: Menu[]
  addMenu: (menu: Menu) => void
  deleteMenu: (menu: Menu) => void
}
export const useMenuStore = create<MenuState>((set) => ({
  menuList: [],
  addMenu: (menu: Menu) => set((state) => ({
    menuList: [...state.menuList, menu]
  })),
  deleteMenu: (menu: Menu) => set((state) => ({
    menuList: state.menuList.filter((val: Menu) => val.id !== menu.id)
  }))
}))

