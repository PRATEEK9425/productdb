const mongoose = require("mongoose")

const Loginschema =mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number
})

const LoginModel = mongoose.model("Logindata",Loginschema)

module.exports={
    LoginModel
}