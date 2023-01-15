const express = require("express")
const { LoginModel } = require("../Models/Login.model")
const  bcrypt = require("bcrypt")
const jwt =require("jsonwebtoken")

const LoginRoutes = express.Router()

LoginRoutes.post("/Register",async(req,res)=>{

    const {name,email,password,age} = req.body
    try{
        bcrypt.hash(password, 4, async(err, secure_pass)=> {
            if(err){
                console.log(err)
                console.log({"err":"Error while hashing"})
            }else{
                const user = new LoginModel({name,email,password:secure_pass,age})
                await user.save()
                res.send("User REGISTERED SUCCESSFULLY")
            }
        })
}
catch(err){
        res.send(" User NOT REGISTERED ")
        console.log(err)
    }
})



LoginRoutes.post("/login",async(req,res)=>{ 
    const {email,password} = req.body
    try{
        const user = await LoginModel.find({email})
        console.log(user)
if(user.length>0){
    bcrypt.compare(password, user[0].password, (err, result)=> {
        // result == true
        console.log(result)
        if(result){
            var token = jwt.sign({ userID:user[0]._id }, 'masai12');
            res.send({"msg":"Login successful","token":token})
            console.log(token)
        }else{
            res.send("wrong credential") 
        }
    })
}
else{
    res.send("wrong credential")
}
    }catch(err){
console.log(err)
console.log("Err while login in")
    }
})


module.exports={
    LoginRoutes
}


