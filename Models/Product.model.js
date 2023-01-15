const mongoose = require("mongoose")

const Productschema =mongoose.Schema({
    Productname:String,
    Type:String,
    Description:String,
    Cost:Number
})

const ProductModel = mongoose.model("Productdata",Productschema)

module.exports={
    ProductModel
}