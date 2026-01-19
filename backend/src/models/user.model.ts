import mongoose, { Schema } from "mongoose";
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { env } from "src/config/envConfig";
import { ApiError } from "src/utils/apiError";

interface userData {
  fullName: string,
  role?: "ADMIN" | "USER" | "DEV",
  email: string,
  password: string,
  avatar?: string,
  emailVerified?: Boolean,
  phoneNumber?: string,
}

interface IUserMethods {
  generateAccessToken(): string
}

type userSchemaType = userData & IUserMethods

const userSchema = new Schema<userSchemaType>({
  fullName: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    tirm: true,
    lowercase: true,
    required: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "DEV"],
    default: "USER"
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: ""
  },
}, { timestamps: true })

userSchema.index({ email: 1 }, { unique: true })

//pre functions
userSchema.pre('save', async function() { //This function will hash the password
  if (this.isModified(this.password)) return;
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.generateAccessToken = function() { //Generate AccessToken && test this!!1

  const payload = jwt.sign({
    _id: this._id,
    role: this._role
  }, env.access_token_key, { expiresIn: "3d" })

  if (!payload) throw new ApiError(429, "Error generating Access Token")

  return payload

}

export const User = mongoose.model("User", userSchema)
