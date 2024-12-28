import mongoose from "mongoose";
import postsModel from "./post";

const schema = new mongoose.Schema({
    name: String,
    email: String,
    body: String,
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }
},
{
    timestamps : true
})

const commentsModel = mongoose.models.comment || mongoose.model('comment' , schema)

export default commentsModel;