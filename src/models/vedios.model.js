import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
videoFile:{
    type: String,
    required:true
},
thumbnail:{
    type:String,
    required:true
},
title:{
    type: String,
    required:[100,"must be only 100 words"]
},
description:{
    type:String,
    required:[1000,"must be only 1000 words"]
},
duration:{
    type: Number,
    required:true
},
views:{
    type:Number,
    default: 0
},
isPublished:{
    type: Boolean,
    default:true
},
owner:{
    type:Schema.Types.ObjectId,
    ref: "User"
}
},
{timestamps: true}) 

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video",videoSchema)