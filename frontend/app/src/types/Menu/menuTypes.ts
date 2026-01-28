

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}

export interface MenuData {
  cafeName: string;
  categories: Category[];
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Cart {
  [key: number]: CartItem;
}

