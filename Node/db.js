const mongoose=require("mongoose")
const dbconnst=(url)=>{
return mongoose.connect(url)
}
module.exports=dbconnst;