import mongoose,{Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { apiError } from "../utils/apiError.js";

const userSchema = new Schema({

  userName:{
    type:String,
    require:true,
  },
  fullName:{
    type:String,
    required:true
  },
  avatar:{
    type:String
  },
  email:{
    type:String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required: true
  },
  mobile:{
    type:String,
    required: true
  },
  refreshToken:{
    type:String
  }

},{
  timestamps:true
});


userSchema.pre("save",async function(next){

  if(!this.isModified("password") ) return null

  this.password= await bcrypt.hash(this.password,10)
  next()

})

userSchema.methods.isPasswordCorrect = async function(password){
  
  try {
    return await bcrypt.compare(password,this.password)
  } catch (error) {
    throw new apiError(400,"Error found when password compare to hash password")
    
  }
}

userSchema.methods.generateAccessToken = async function(){
  return jwt.sign({
    _id:this._id,
    username:this.username
  },process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
  })
}

userSchema.methods.generateRefreshToken =  async function(){
  return jwt.sign({
    _id:this._id
  },process.env.REFRESH_TOKEN_SECRET,{
    expiresIn:process.env.REFRESH_TOKEN_EXPIRY
  })
}




export const User = mongoose.model("user",userSchema)