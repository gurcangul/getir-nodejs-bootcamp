const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({

    title:{
        type:String,
        requried:true,
        minLength: 5,
    },
    description:{
        type:String,
        requried:true,
        minLength: 5,
    },
    author:{
        type:mongoose.type.ObjectId ,
        userId:[{ type: Schema.Types.ObjectId, ref: "User" }],
        required:true,
        minLength: 5,
    },



}, {timestamps:true})


module.exports = mongoose.model('User', UserSchema);