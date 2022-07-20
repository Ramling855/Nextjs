const express=require("express")
const { read,postdata,deletedata ,updatedata} = require("../controller/crud")
const router=express.Router()

router.get("/get",(req,res)=>{
res.send("data")
})
router.get("/read",read)
router.post("/post",postdata)
router.delete("/delete/:id",deletedata)
router.put("/data/:id",updatedata)
module.exports=router;