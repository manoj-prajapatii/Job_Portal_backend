import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
        fullname : {
        type : String,
        required : true
    },
})