const mongo=require("../model/schema")
const read=(req,res)=>{
    mongo.find().then((data)=>{
res.send(data)
    })
}
const postdata=(req,res)=>{
    console.log(req.body)
    const data=new mongo({
        name:req.body.user.name,
        sname:req.body.user.sname

    })
    data.save().then(()=>{
        console.log("data saved")
    }).catch(()=>{
        console.log("error data not saved")
    })
}
const deletedata=(req,res)=>{
console.log(req.params.id)
console.log(req.body)

    mongo.findByIdAndDelete(req.params.id).then((all)=>{
        // res.send(all)
        console.log("daleted")
    })
}
const updatedata=(req,res)=>{
    console.log(req.body)
    var data=req.body
    console.log(req.params)
    res.send("data")
mongo.findByIdAndUpdate(req.params.id,{name:data.name,sname:data.sname}).then(()=>{
    console.log("update")
})
}
module.exports={read,postdata,deletedata,updatedata}