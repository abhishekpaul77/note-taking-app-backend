// import express from "express";
// import { userRoute } from "./modules/user/routes/user-routes";

// const app=express()

// app.use('./',userRoute)

// const server=app.listen(1234,(err)=>{
//     if(err){
//         console.log("server crashed",err)
//     }
//     else{
//         console.log("server up and running".
//         server.address().port);
//     }
// })

import express, { request, response }  from "express";
import { userRoute } from "./modules/user/routes/user-routes.js";
import cors from 'cors'

const app=express();
app.use(cors());
app.use(express.json());
app.use('/',userRoute);
app.use((request,response,next)=>{
    response.json({message:"Invalid URL"})
})

const server=app.listen(1234,(err)=>{
    if(err){
        console.log("Server crashed",err)
    }
    else{
        console.log("Server is up and running",server.address().port)
    }
})