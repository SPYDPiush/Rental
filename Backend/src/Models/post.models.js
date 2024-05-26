import mongoose,{Schema} from "mongoose";


const postSchema = new Schema({

  images:{
    type:Array,
    required:true
  },

  bathroom:{
    type:Number,
    require:true
  },
  bedroom:{
    type:Number,
    require:true
  },
  balcony:{
    type:Number,
    require:true
  },
  kitchen:{
    type:Number,
    require:true
  },
  address:{
    type : String,
    required : true
  }


})


export const Post = mongoose.model("post",postSchema)