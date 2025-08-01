import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config({
    path: "./.env"
});

connectDB();
const app= express();
app.get('/', (req,res)=>{
    res.send("Backend setup is running ");
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})




