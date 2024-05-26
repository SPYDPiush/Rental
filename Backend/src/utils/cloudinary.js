import {v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.CLOUD_API_KEY,
  api_secret:process.env.CLOUD_API_SECRET,
})


const uploadOnCloudinary = async (localfile) => {
  try {

    if(!localfile) return null
    const response = await cloudinary.uploader.upload(localfile,{
      resource_type:"auto"
    })

    // fs.unlink(localfile)
    return response.url

    

    
  } catch (error) {

    fs.unlink(localfile)
    return null
    
  }
}

export {uploadOnCloudinary}