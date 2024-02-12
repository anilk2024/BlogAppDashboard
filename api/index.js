import express from "express";
import mongoose  from "mongoose";
import dotenv, { config } from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
console.log('mongodb is connected');
}).catch((err)=>{
console.log(err);
})

const PORT=process.env.PORT||8000
const app=express();
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}!!`)
})