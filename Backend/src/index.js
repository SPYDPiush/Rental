
import {app} from './app.js'
import dotenv from "dotenv";
import connectDB from "./Database/index.js";

dotenv.config({
  path: './.env'
})

connectDB()
.then( () =>{
  app.listen(process.env.PORT || 3030 , (req,res) => {
    console.log(`server is listen ${process.env.PORT}`)
  })
})
.catch( (err) => console.log(`MongoDB connection failed ${err}`))

