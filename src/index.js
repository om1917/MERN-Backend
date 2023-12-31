//require('dotenv').config({path:'./env'})

import dotenv from "dotenv";
import connectDB from "./database/index.js";
import app from "./app.js";
dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.on("error", (error) => {
        console.log("Error:", error);
        throw error;
    });
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Connection Failed !",err)
})

/*
import express from "express";

const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("Error:", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Process is listening or port ${process.env.PORT}`);
        })

    } catch (error) {
        console.log("Error:", error)
        throw error
    }
})()
*/