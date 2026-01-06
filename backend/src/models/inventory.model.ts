import mongoose, { Schema, Types } from "mongoose";

type itemType = {
  itemName: string,
  price: number,
  popularityScore: number
}

type categoryType = {
  categoryName: string,
  menuId: Types.ObjectId
  itemList: Types.ObjectId[],
}

type menuType = {
  menuName: string,
  inventory: Types.ObjectId[]
}

const itemSchema = new Schema<itemType>({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  popularityScore: {
    type: Number,
    required: true
  }
})

const categorySchema = new Schema<categoryType>({
  categoryName: {
    type: String,
    index: true,
    required: true,
  },
  menuId: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
  },
  itemList: [{
    type: mongoose.Types.ObjectId,
    ref: "Item"
  }]
}, {
  timestamps: true,
})

const menuSchema = new Schema<menuType>({
  menuName: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },
}, { timestamps: true })

export const Category = mongoose.model("Category", categorySchema);
export const Item = mongoose.model("Item", itemSchema);
export const Menu = mongoose.model("Menu", menuSchema);

