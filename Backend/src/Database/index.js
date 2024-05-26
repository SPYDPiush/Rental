import mongoose from "mongoose";
import { DB_Name } from "../constant.js";


const connectDB = async () => {
  
  try {

    const connnectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_Name}`);
    // console.log("database instance",connnectionInstance.Connection)
    }
    
   catch (error) {
    console.log("Connection failed error : ",error)
    process.exit(1)
    
  }
}

export default connectDB;