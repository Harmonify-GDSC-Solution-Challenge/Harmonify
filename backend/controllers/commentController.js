const Post=require('../models/postModel');
const Comment=require('../models/commentModel')

//business logic

exports.createComment=async(req,res)=>{
    try{
        //fetch data from req body
        const{post,user,body}=req.body;
        //create a comment object
        const comment = new Comment({
            post,user,body
        });
        //save the comment into database
        const savedComment=await comment.save();

        //find post by id and then update comment array
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("comments")//populate the comments array with comment documents
        .exec();

        res.json({
            post:updatedPost,
        });

        

    }
    catch(error){
        return res.status(500).json({
            error:"error while creating comment",
        })
    }
}