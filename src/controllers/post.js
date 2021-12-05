const Post = require("../models/Post");
const User = require("../models/User")

exports.getAllPost =async (req, res) => {

    try {
        const posts = await Post.find();
        res.status(200).json({success:true, posts})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }

}

exports.getPost =async (req, res) => {
const {id} = req.params;

try {

const post = await Post.findById(id);
res.status(200).json({success:true, post}) 
} catch (error) {
    res.status(500).json({success:false, message:error.message})
}

}

exports.createPost =async (req, res) => {


    try {
   const post = await Post.create(req.body);
        res.status(201).json({success:true, post})
    } catch (error) {
    
    res.status(500).json({success:false, message:error.message})

    }


}
exports.updatePost =async (req,res) => {

    const {id} = req.params;

    try {
        const newPost = await Post.findByIdAndUpdate(id,req.body,{new:true})
        res.status(201).json({success:true, newPost})
    } catch (error) {
    res.status(500).json({success:false, message:error.message})
    }

}
exports.deletePost =async (req, res) => {

    const {id} = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        res.status(201).json({success:true, deletedPost})
    } catch (error) {
    res.status(500).json({success:false, message:error.message})
        
    }

}
