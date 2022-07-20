// const express=require("express")
require("dotenv").config()
const app=require("./app")
const port=process.env.PORT||5000;
const dbconnst=require("./db")
console.log(process.env.URL)
dbconnst(process.env.URL).then(()=>{
    app.listen(port,()=>{
        console.log(`sever connected ${port}`)
        console.log("mongo connected")
    })
}).catch((tt)=>{
    console.log("err",tt)
})
