const mongoose =require("mongoose")

const connection = mongoose.connect("mongodb+srv://Prateeksoni:masai@cluster0.4fmvveo.mongodb.net/Cruddata?retryWrites=true&w=majority")


module.exports={
    connection
}