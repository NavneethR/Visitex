import express from "express";
import { PORT } from "./config.js";
import { DB } from "./config.js";
import mongoose from "mongoose";

const app = express();

mongoose.connect(DB).then(() => {
    console.log("App connected to Database")
}).catch((error) => {
    console.log("Error connecting to DB")
})

app.post("/root/signup",(req, res)=>{
    try{

    }catch(error){
        console.log("Unexpected Error: "+error.message)
    }
});

app.listen(PORT,()=>{
    
    console.log("App is listening on port "+PORT);
});