import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const register = async (req, res) => {
    try{
        const {
            firstName,
            middleName,
            lastName,
            email,
            password,
            phoneNumber,
            location
        } = req.body;

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newUser = new User({
            firstName,
            middleName,
            lastName,
            email,
            password:passwordHash,
            phoneNumber,
            location
        });

        const saveUser = await newUser.save();
        res.status(201).json(saveUser);

    }catch(error){
        res.status(500).json({ error : error.message}); 
    }
};

export const login = async(req, res) => {
    
};