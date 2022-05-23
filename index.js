const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors());     

app.get("/",(req,res)=>{
    res.send({work:"success"})
})

app.post("/post",(req,res)=>{
    console.log(req.query);
    res.send("hello i am a post req "  )
})

// app.put("/updatedvalue/:data",(req,res)=>{
//     console.log(req.params);
//     res.send("hello i am a success")
// })

app.listen("8080",(req,res)=>{
    console.log("hello i am a listen server");
})
