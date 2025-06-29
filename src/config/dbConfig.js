import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

export default async function connectDB() {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connected to MongoDB");
        
    }   catch(error)
    {
        console.log("Fail to connect to MongoDB");
        console.log(error);
    }  




}