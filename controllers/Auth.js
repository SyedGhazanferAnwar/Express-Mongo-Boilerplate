const HttpError = require("../models/httpError")
module.exports={
    login:async (req,res,next)=>{
        try{
            return res.status(200).json({message:"Manage Login Logic here",status:200})
        }catch(err){
            return next(new HttpError(err+"",500))
        }
    }
}