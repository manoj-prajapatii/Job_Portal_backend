import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name : {
        type :String,
        required : true
    },
    description : {
        type :String,
        required : true
    },
    location : {
        type :String,
    },
    website : {
        type :String,
    },
    logo : {
        type : String,
    },
    companyId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
},{timestamps : true});
export const company = mongoose.model("company", companySchema);