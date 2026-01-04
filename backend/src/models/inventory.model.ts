import mongoose, { Schema, Types } from "mongoose";
import { required } from "zod/v4/core/util.cjs";

type itemType = {
  itemName: string,
  price: number,
  popularityScore: number
}

type categoryType = {
  categoryName: string,
  itemList: Types.ObjectId[]
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
    required: true,
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
  },
  inventory: [{
    type: mongoose.Types.ObjectId,
    ref: "Category"
  }],
}, { timestamps: true })

export const Categoryategory = mongoose.model("Category", categorySchema);
export const Item = mongoose.model("Item", itemSchema);
export const menu = mongoose.model("Menu", menuSchema);
