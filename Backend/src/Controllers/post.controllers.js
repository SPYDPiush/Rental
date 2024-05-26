import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../Models/post.models.js";
import asyncHandler from "../utils/asyncHandler.js";

const postCreate = asyncHandler(async (req, res) => {
  const { bedroom, bathroom, kitchen, balcony,address } = req.body;

  if ([bedroom, bathroom, kitchen, balcony,address].some((field) => field?.trim() === "")) {
    throw new apiError(400, "All fields are required");
  }

  const postLocalPaths = req.files?.images?.map((item) => item?.path);

  if (!postLocalPaths || postLocalPaths.length === 0) {
    throw new apiError(400, "Images are required");
  }

  try {
    const postUrls = await Promise.all(postLocalPaths.map(uploadOnCloudinary));

    if (postUrls.some((url) => !url)) {
      throw new apiError(401, "Some images failed to upload to Cloudinary");
    }

    const post = await Post.create({
      images: postUrls,
      bedroom,
      bathroom,
      balcony,
      kitchen,
      address
    });

    return res.status(200).json(
      new apiResponse(200, post, "Post created successfully")
    );
  } catch (error) {
    console.error("Error occurred during post creation:", error);
    throw new apiError(500, "Internal server error");
  }
});


const getAllPost = asyncHandler( async (req,res) => {
  try {

    const posts = await Post.find()
    if(!posts){
      throw new apiError(401,"Error found while fetching Posts")
    }

    return res.status(200).json(
      new apiResponse(200,posts,"Posts fetched successfully")
    )

    
  } catch (error) {
    console.log("error fetching posts",error)
    throw new apiError(500,"internal server error")
    
  }
})

export { postCreate, getAllPost };
