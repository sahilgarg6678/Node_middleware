const express  = require('express');

const server = express();

const middleware1  = (req,res,next) =>{
    console.log("Hello i am a middleware1");
    next()    //block the flow and take it back to the request router
}

const middleware2 = (req,res,next)=>{
    console.log("Hello i am a middleware2");
    next()
}

server.use(middleware1);
// server.use(middleware2);


server.get("/",(req,res)=>{
    res.send("hello ")
})

server.get("/user",middleware2,(req,res)=>{
    res.send({name:"sahil"})
})

server.listen(8080,()=>{
    console.log("hello i am server is listen");
})

//http methods:
//CRUD : create, read ,update, delete.
//get ,post ,upadte, delete.