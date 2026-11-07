import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";

dotenv.config({});

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: 'https://localhost:5173',
    credentials:true
}
app.use (cors(corsOption));

const PORT = process.env.PORT || 8000
app.listen(PORT, () =>{
    connectDb();
    console.log("Chill broh...! ");
})