const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    name:{
        type:String
    },
    sname:{
        type:String
    }
})
module.exports=mongoose.model("company",schema)