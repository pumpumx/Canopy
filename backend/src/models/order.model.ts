import mongoose, { mongo, Schema, Types } from "mongoose";


//----------------------------------------ORDER SCHEMA---------------------------------------------------//

type orderType = {
  orderNumber: string,
  menuId: Types.ObjectId,
  userId: Types.ObjectId
  idempotentKey: string
  orderSource: "COUNTER" | "ONLINE",
  orderType: "DINE_IN" | "TAKE_AWAY",
  status: "CREATED" | "PREPARING" | "READY" | "COMPLETED" | "CANCELLED" | "DISPUTED",
  totalAmount: number,
}
type orderFunctions = { //all order db funcitons 

}
type orderSchemaType = orderType & orderFunctions

const orderSchema = new Schema<orderSchemaType>({
  orderNumber: { //unique idempotent key
    type: String,
    required: true,
  },
  idempotentKey: {
    type: String,
    required: true
  },
  menuId: {
    type: mongoose.Types.ObjectId,
    ref: 'Menu'
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
  orderSource: {
    type: String,
    enum: ["COUNTER", "ONLINE"],
    default: "COUNTER"
  },
  orderType: {
    type: String,
    enum: ["DINE_IN", "TAKE_AWAY"],
    default: "DINE_IN"
  },
  status: {
    type: String,
    enum: ["CREATED", "PREPARING", "READY", "COMPLETED", "CANCELLED", "DISPUTED"],
    default: "CREATED"
  },
  totalAmount: {
    type: Number,
    required: true,
  }
}, { timestamps: true })

orderSchema.index({ orderNumber: 1, idempotentKey: 1 }, { unique: true })
export const Order = mongoose.model("Order", orderSchema);
//----------------------------------------ORDERITEM SCHEMA---------------------------------------------------//

type orderItemSchemaType = Document & orderItemType
type orderItemType = {
  orderId: Types.ObjectId,
  itemName: Types.ObjectId,
  quantity: Number,
  gstPercent: Number
}

const orderItemSchema = new Schema<orderItemSchemaType>({
  orderId: Types.ObjectId,
  itemName: Types.ObjectId,
  quantity: Number,
  gstPercent: Number
}, { timestamps: true });

export const OrderItem = mongoose.model("OrderItem", orderItemSchema)

//----------------------------------------INVOICE SCHEMA---------------------------------------------------//
type invoiceType = {
  orderId: Types.ObjectId,
  invoiceNumber: String,
  cgst: Number,
  sgst: Number,
  discount?: Number,
  serviceCharge?: Number,
  total: Number,
}
type invoiceSchemaType = Document & invoiceType
const invoiceSchema = new Schema<invoiceSchemaType>({
  orderId: {
    type: mongoose.Types.ObjectId,
    ref: "Order"
  },
  invoiceNumber: {
    Type: String,
  },
  cgst: {
    type: Number,
  },
  sgst: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  serviceCharge: {
    type: Number,
  },
  total: {
    type: Number,
    required: true,
  },
}, { timestamps: true })

invoiceSchema.index({ invoiceNumber: 1 }, { unique: true })
export const Invoice = mongoose.model("Invoice", invoiceSchema)

