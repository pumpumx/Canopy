import mongoose, { Schema, Document } from "mongoose";
import jwt from 'jsonwebtoken'
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

type userSchemaType = Document & userData & IUserMethods

const userSchema = new Schema<userSchemaType>({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
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
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.generateAccessToken = function() { //Generate AccessToken && test this!!1
  try {

    console.log("inside generate accessToken")

    const accessToken = jwt.sign({ //error somewhat here
      userId: this._id.toString(),
      role: this.role
    }, env.access_token_key, { expiresIn: "1d" })

    console.log("returning accessToken")
    return accessToken
  } catch (error) {
    console.log(error)
    throw new ApiError(404, "Error while generating error token")
  }
}

export const User = mongoose.model("User", userSchema)
