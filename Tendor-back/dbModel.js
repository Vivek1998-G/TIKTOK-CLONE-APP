import mongoose from "mongoose";

const ticktockSechma=mongoose.Schema({
url:String,
channel:String,
description:String,
song:String,
likes:String,
shares:String,
messages:String
})

export default mongoose.model('tiktokVideos',ticktockSechma)