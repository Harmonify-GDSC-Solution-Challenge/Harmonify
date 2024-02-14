const express=require('express');
const router=express.Router();
const {auth}=require('../middlewares/auth')
const {createCommunity}=require('../controllers/Community')



router.post("/createCommunity",auth,createCommunity);
// router.post("/certificateUploader",auth,certificateUploader);


module.exports = router