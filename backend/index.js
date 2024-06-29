const express = require("express");
const mongoose = require("mongoose");
const {users} = require("./models/allTimeVisitorModel");
const {visitors} = require("../backend/models/currentVisitorModel");
const {rootUsers} = require("./models/rootModel");


require("dotenv").config();

const app = express();
const port = process.env.PORT;
const dataBaseURI = process.env.ATLAS_URI;

app.use(express.json());

mongoose.connect(dataBaseURI).then(()=>{
    console.log("Connected to Database successfully");
}).catch((e) => {
    console.log("Error connecting...");
    console.log("error: "+e);
});

app.listen(port,()=>{
    console.log(`App runnning on port ${port}`);
});

app.post("/register-user",async (req, res) => {
    try{
        let {visitorName, employeeName, reason, photo} = req.body;
        if(visitorName !== null && employeeName !== null && reason !== null && photo !== null){
            let data = {...req.body,enterTime: new Date().toLocaleTimeString(),exitTime: null}
            const user = await users.create(req.body);
            await visitors.create(data);
            console.log("User successfuly added");
            res.send(user).status(200);
        }else{
            throw new Error("Invalid number of arguments");
        }
    }catch(e){
        console.log("Unexpected Error: "+e);
    }
});

app.post("/logout",async(req, res) => {
    try{
        let {visitorName} = req.body;
        await visitors.findOneAndDelete({visitorName});
        res.status(200);
    }catch(e){
        console.log("Unexpected Error: "+e.message);
    }
})

app.post("/old-user",async(req, res) => {
    try{
        let {visitorName, employeeName, reason} = req.body;
        if (await users.exists({visitorName: visitorName})){
            let person = await users.findOne({visitorName: visitorName});
            await visitors.create({...req.body});
            res.status(200)
        }else{
            throw new Error("User does not exsist!");
        };
    }catch(e){
        console.log(e)
    }
});

app.post("/root/signup",async (req, res)=> {
    try{
        if(req.body.userName !== null && req.body.password !== null){
            if(await rootUsers.exists({userName: req.body.userName})){
                throw new Error("User name already exsists");
            }else{
                await rootUsers.create(req.body);
                console.log("User Added");
                res.status(200);
            }
        }else{
            throw new Error("Invalid number of arguments");
        }
    }catch(e){
        console.log("Unexpected Error: "+e);
    }
});

app.get("/root", async(req, res)=>{
    try{
        const visitor = await users.find({});
        res.send(visitor).status(200);
    }catch(e){
        console.log("Unexpected Error: "+e);
    };
});

app.delete("/logout",async(req, res) => {
    try{

    }catch(e){}
})

app.post("/root/login", async (req, res)=> {
    try{
        if(req.body.userName !== null && req.body.password !== null){
            let user = req.body.userName;
            let password = req.body.password;
            if(await rootUsers.findOne({userName: user, password: password})){
                res.status(200).send("Successful");
            }else{
                throw new Error("User or Password incorrect");
            }
            
        }else{
            throw new Error("Invalid number of arguments");
        }
    }catch(e){
        console.log("Unexpected Error: "+e);
    }
})