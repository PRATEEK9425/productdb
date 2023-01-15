const jwt = require("jsonwebtoken")

const Authmiddlewear = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decode = jwt.verify(token,"masai12")
        if(decode){
            const userID =decode.userID
            req.body.userID = userID
          next()
        }else{
            res.send("Please Login First")
        }
    }
    else{
        res.send("Please Login First")
    }
}


module.exports={
    Authmiddlewear
}
