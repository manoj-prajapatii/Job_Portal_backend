import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'recruiter']
    },
    profile: {
        bio: {
            type: String,
        },
        skills: {
            type: String,
        },
        resume: { type: String },
        resumeOriginalName: { type: String },
        profilePhoto: { type: String, default: "" },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },

    },
}, { timestamp: 'true' });

export const User = mongoose.model("User", userSchema);