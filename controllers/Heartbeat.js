module.exports={
    index:async (req,res,next)=>{
        return res.status(200).json({message:"Welcome to Our API",status:200})
    }    
}