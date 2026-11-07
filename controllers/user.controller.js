import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) =>{
    try{
        const {fullname ,email, phoneNumber, role, password} = req.body;
        if (!fullname || !email || !phoneNumber || !role || !password){
            return res.status(400).json({
                message : "Something is missing",
                success : false
            });
        };
        const user = await User.findOne({email});
        if (user){
            return res.status(400).json({
                message : "User already exist with this email",
                success : false
            })
        };
        const hashedPassword = await bcrypt.hash(password, 10);
        await userCreated ({
            fullname,
            email,
            phoneNumber,
            role,
            password : hashedPassword,
        })
    }catch (error){

    }
}

export const login = async (req, res) =>{
    try {
        const {fullname, password, role} = res.body
        if (!fullname || !password || !role){
            return res.status(400).json({
                message : "Incorrect email or password",
                success : false
            });
        };
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({
                message : "Incorrect email or password",
                success : false
            });
        };

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch){
            return res.status(400).json({
                message : "Incorrect password",
                success : false
            });
        };
        if (role != user.role){
            return res.status(400).json({
                message : "Account doesn't exist with current role",
                success : false
            });
        };

        const tokenData = {
            userId:user._id
        }
        
    }catch (error)
    {

    }
}