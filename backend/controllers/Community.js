const Community=require('../models/Community');
const User=require('../models/User');
const Post=require('../models/postModel');
const Comment=require('../models/commentModel');
const Like=require('../models/likeModel');

exports.createCommunity=async(req,res)=>{
try{    
    const{name,description}=req.body
    const admin=req.user.id;
    console.log(req.user.id)
    if(!name||!description||!admin){
        return res.status(500).json({
            success:false,
            message:'Fill all the fields'
        })
    }

    const communityDetails = await Community.create({
        name: name,
        description: description,
        admin: admin
    });

    console.log(communityDetails);

    const updateUser=await User.findByIdAndUpdate(admin,{ $push: { community:communityDetails._id } },{new:true});
    console.log(updateUser);

    return res.status(200).json({
        success:true,
        message:'Successfully created community',
    });
}
catch(error){
    return res.status(401).json({
        success:false,
        message:'Trouble creating communities'
    })
}
}