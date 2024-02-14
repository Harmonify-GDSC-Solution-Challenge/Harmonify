const Post=require('../models/postModel');

exports.createPost=async (req,res)=>{
    try{
        const{title,body}=req.body;
        const userId=req.user.id;
        const post=new Post({
            title,body
        });
        const savedPost=await post.save();

        res.json({
            post:savedPost,
        })

        await User.findByIdAndUpdate(
			{
				_id: userId,
			},
			{
				$push: {
					post: savedPost._id,
				},
			},
			{ new: true }
		);
        res.status(200).json({
			success: true,
			data: savedPost,
			message: "Post Created Successfully",
		});

    }
    catch{
        return res.status(400).json({
            error:"error while creating post",
        })
    }
};

exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find().populate("comments").populate("like").exec();
        res.json({
            posts,
        })
    }
    catch{
        return res.status(400).json({
            error:"error while fetching post",
        })
    }

};