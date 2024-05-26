import asyncHandler from "../utils/asyncHandler.js";
import { apiError } from "../utils/apiError.js";
import jwt from "jsonwebtoken";
import { User } from "../Models/user.models.js";


export const verifyJwt = asyncHandler( async(req,res,next) => {

  try {

    const Token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")

    if(!Token){
      throw new apiError(401,"unauthorized user..")
    }

    const decodedToken = jwt.verify(Token,process.env.ACCESS_TOKEN_SECRET)

    console.log(decodedToken)

    const user = await User.findById(decodedToken._id).select("-password -refreshToken")

    if(!user){
      throw new apiError(401,"user unauthorized")
    }

    req.user = user;
    next()


    
  } catch (error) {
    
    throw new apiError(401,"invalid access token")
  }

})