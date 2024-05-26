import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { getAllPost, postCreate } from "../Controllers/post.controllers.js";

const postRouter = Router();

postRouter.route('/addPost').post(
  
  upload.fields([
    {
      name: "images",
      maxCount: 10 
    }
  ]),
  postCreate
);


postRouter.route('/allpost').post(getAllPost)

export { postRouter };
