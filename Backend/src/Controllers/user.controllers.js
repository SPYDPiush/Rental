import { apiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import { User } from "../Models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { apiResponse } from "../utils/apiResponse.js";





const userRegister = asyncHandler( async (req,res) => {

  // steps to register user in database

  // check all fields are required 
  // check if user exist aleready
  // check the avatar
  // upload on cloudinary
  // create user object in db
  // remove password and refreshe token from field with response
  // check for user creation
  // return response

  const {userName,fullName,avatar,email,password} = req.body

  if(
    [userName,fullName,avatar,email,password].some( (field) => field?.trim() == "")  )
    {
      throw new apiError(400,"All fields are required")
    }

    const existedUser =  await User.findOne({email})

    if(existedUser){
      return new apiError(409,"Email is already Exist.")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path

    if(!avatarLocalPath)
      { 
        throw new apiError(400,"avatar is required")
  }

  const avatatURL = await uploadOnCloudinary(avatarLocalPath)

  if(!avatatURL){
    throw new apiError(400,"avatar is required")
  }


  const user = await User.create({
    fullName,
    avatar:avatatURL,
    email,
    userName,
    password
  })



  const createUser = await User.findById(user._id).select("-password -refreshToken")

  if(!createUser){
    throw new apiError(500,"something went wrong while registering the user")
  }

  return res.status(201).json( new apiResponse(200,createUser,"User Register successfully"))

})


const loginUser = asyncHandler( async (req,res) => {

  // method for generate access token and refresh token

  const generateAccessTokenAndRefreshToken = async (userid) => {

    try {

      const user = await User.findById(userid)
      const accessToken = await user.generateAccessToken()
      const refreshToken = await user.generateRefreshToken()

      user.refreshToken = refreshToken

      await user.save({validateBeforeSave:false})

      return {accessToken,refreshToken}
      
    } catch (error) {
      // console.log(error)
      throw new apiError(500,"Error found when generate Access Token")
      
    }
  }

  

  // take a data from frontend user
  // all required fields are present or not
  // find user in database
  // match password 
  // give access token and refresh token
  // send cookies

  const {email,password} = req.body


  if(!email){
    throw new apiError(400,"Email required for login")
  }

  if(!password){
    throw new apiError(400,"Password required for login")
  }

  

  const user = await User.findOne({email})

  if(!user){
    throw new apiError(404,"user not found")
  }

  const checkPassword = await user.isPasswordCorrect(password)

  if(!checkPassword){
    throw new apiError(401,"Enter password is not correct.")
  }

  const {accessToken,refreshToken} =await generateAccessTokenAndRefreshToken(user._id)

  const loggedUser = await User.findById(user._id).select("-password -refreshToken")

  const option={
    httpOnly:true,
    secure:true
  }

  return res.status(200)
  .cookie("accessToken",accessToken,option)
  .cookie("refreshToken",refreshToken,option)
  .json(
    new apiResponse(200,{
      data:loggedUser,refreshToken,accessToken
    },
    "User LoggedIn Successfully")

  )
})


const logoutUser = asyncHandler( async (req,res) => {

  await User.findByIdAndUpdate(
    req.user._id,{
      $set:{
        refreshtoken : undefined,
      }
    },
    {
      new: true
    }
  )

  const option={
    httpOnly:true,
    secure: true
  }

  res.status(200).
  clearCookie("accessToken",option)
  .clearCookie("refreshToken",option)
  .json(
    new apiResponse(200,{},"User Logout")
  )



})



export {userRegister,loginUser,logoutUser}