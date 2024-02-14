const mongoose =require('mongoose');

//route handler
const postSchema=new mongoose.Schema({

    imageUrl:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"like",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});


//export
module.exports=mongoose.model("Post",postSchema);