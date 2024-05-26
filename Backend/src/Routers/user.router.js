import { Router } from "express";
import { loginUser, logoutUser, userRegister } from "../Controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJwt } from "../middlewares/authorised.middlewares.js";

const userRouter =  Router()

userRouter.route('/register').post(upload.fields([
  {
    name: "avatar",
    maxCount: 1
  }
    ]),
  userRegister)

  userRouter.route('/login').post(loginUser)

    userRouter.route('/logout').post(verifyJwt,logoutUser)


export {userRouter}