import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors";




 const app = express()



app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({
  limit:"16kb"
}))

app.use(express.static("public"))

app.use(cookieParser())


import { userRouter } from "./Routers/user.router.js"


app.use('/user',userRouter)

export {app}