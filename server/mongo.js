const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ReactPaysForm",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>{console.log("connection Successful!!")})
  .catch((err)=>{console.log(err)});

  // Schema
  const PaySchema=new mongoose.Schema({
    name:String,
    age:String
  });

  // Model
  const Pays=new mongoose.model("Pay",PaySchema);
  module.exports=Pays;