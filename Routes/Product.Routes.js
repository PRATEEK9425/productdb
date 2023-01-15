const express = require("express")
const { ProductModel } = require("../Models/Product.model")

const ProductRouter = express.Router()

ProductRouter.get("/allproduct",async(req,res)=>{
 try{
const product = await ProductModel.find()
res.send(product)
 }catch(err){
console.log(err)

 }
})


ProductRouter.post("/addproduct",async(req,res)=>{
   const payload = req.body
try{
const product = new ProductModel(payload)
await product.save()
res.send("New Product save ")
}catch(err){
console.log(err)
console.log({"Err":"data is been added"})
}
   })

ProductRouter.patch("/update/:id",async(req,res)=>{
    const payload = req.body
    const id = req.params.id
    const product = await ProductModel.findOne(({"_id":id}))
    // res.send(product)
    // console.log(product)
    const userID_in_product = product.userID
    const userID_making_req = req.body.userID
    try{
 if(userID_making_req!==userID_in_product){
     res.send({"msg":"You are not authoraised"})
 }else{
     await ProductModel.findByIdAndUpdate({"_id":id},payload)
     res.send("Updated the note")
 }
    }catch(err){
 console.log(err)
 res.send({"msg":"something went wrong"})
    }
})

ProductRouter.delete("/delete/:id",async(req,res)=>{
   
    const id = req.params.id
    const note = await ProductModel.findOne(({"_id":id}))
    const userID_in_note = note.userID
    const userID_making_req = req.body.userID
    try{
 if(userID_making_req!==userID_in_note){
     res.send({"msg":"You are not authoraised"})
 }else{
     await ProductModel.findByIdAndDelete({"_id":id})
     res.send("Deleted the note")
 }
    }
    
    catch(err){
 console.log(err)
 res.send({"msg":"something went wrong"})
    }
 })

module.exports={
    ProductRouter
}
