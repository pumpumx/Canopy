import mongoose, { Schema, Types } from "mongoose";

type itemType = {
  itemName: string,
  price: number,
  popularityScore: number,
  categoryId: Types.ObjectId
  menuId: Types.ObjectId
}
type categoryType = {
  categoryName: string,
  menuId: Types.ObjectId
  itemList: Types.ObjectId[],
}
type menuType = {
  user: Types.ObjectId
  menuName: string,
}

const itemSchema = new Schema<itemType>({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0

  },
  popularityScore: {
    type: Number,
    required: true,
    default: 0
  },
  categoryId: {
    type: mongoose.Types.ObjectId,
    ref: "Category"
  },
  menuId: {
    type: mongoose.Types.ObjectId,
    ref: "Menu"
  },
}, { timestamps: true })

const categorySchema = new Schema<categoryType>({
  categoryName: {
    type: String,
    required: true,
  },
  menuId: {
    type: mongoose.Types.ObjectId,
    ref: "Menu",
  },
},
  {
    timestamps: true,
  })

const menuSchema = new Schema<menuType>({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  menuName: {
    type: String,
    required: true,
  },
}, { timestamps: true })

menuSchema.index({ menuName: 1 }, { unique: true })
categorySchema.index({ categoryName: 1, menuId: 1 }, { unique: true })
itemSchema.index({ itemName: 1 }, { unique: true })

export const Category = mongoose.model("Category", categorySchema);
export const Item = mongoose.model("Item", itemSchema);
export const Menu = mongoose.model("Menu", menuSchema);

