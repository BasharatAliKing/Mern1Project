const express=require("express");
const cors=require("cors");
require("./mongo");
const Pays=require("./mongo");
const app=express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from the Other Side...");
});
app.post("/",async(req,res)=>{
    const data=req.body;
  
    const dataSaving=await Pays({
        name:data.name,
        age:data.age
    });
   const datasaves=await dataSaving.save()
    console.log(data);
    res.send("Data Saved into Database..");
})

app.listen(8000,()=>{console.log("Listening from the port no 8000")});