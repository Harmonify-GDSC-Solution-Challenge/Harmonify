const express=require('express');
const router=express.Router();
const {auth}=require('../middlewares/auth')
const{signup}=require('../controllers/Auth');
const{getAllCertificates,certificateUploader,certificateUpdater}=require('../controllers/Certificate');


router.get("/getAllCertificates",auth,getAllCertificates);
router.post("/certificateUploader",auth,certificateUploader);
// router.post("/certificateUpdater",auth,certificateUpdater);


module.exports = router