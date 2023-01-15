const express = require("express")
const { connection } = require("./config/db")
const { Authmiddlewear } = require("./Middlewear/Auth.middlewear")
const { LoginRoutes } = require("./Routes/Login.Routes")
const { ProductRouter } = require("./Routes/Product.Routes")
var cors = require('cors')
const app = express()


app.use(express.json())
// app.use(cors({
//      origin:"*"
//      }))
app.use("/userlogin",LoginRoutes)
// app.use(Authmiddlewear)
app.use("/product",ProductRouter)

app.get("/",(req,res)=>{
    res.send("server running")
})

app.listen(3500,async()=>{
try{
await connection
console.log("Connected to Db")
}
catch(err){
console.log(err)
console.log({"Err":"err while connecting to mongodb"})
}
    console.log("server running on 3500")
})

