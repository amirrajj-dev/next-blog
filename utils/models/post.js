const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    author : {
        type : String ,
        required : true
    }
},
{
    timestamps : true
})

const postsModel = mongoose.models.post || mongoose.model('post' , schema);

export default postsModel;