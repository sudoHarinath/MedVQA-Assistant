
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userModel = require('../models/signupModel')
const dotenv = require("dotenv")
const jwt = require("jsonwebtoken")

dotenv.config();

let generateToken = (id)=>{
    let token = jwt.sign({id},process.env.tokensignature);
    return token;
}
const signUp=async(req,res)=>{
    try{
        const user = new userModel({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        const result=await user.save();
        console.log("user saved: ",result);
        res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
}
const login = async (req, res) => {
    console.log('Received login request:', req.query);
    const { username, password } = req.query;

    try {
        const user = await userModel.findOne({ username });
        console.log(user);
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    const token = generateToken(user._id);

                    res.cookie("jwt", token, {
                        withCredentials: true,
                        httpOnly: false,
                        maxAge: 3*24*60*60,
                    });
                    res.status(200).json({ status: 'success', token, created: true, user: user.username });
                } else {
                    console.log("wrong pasword........")
                    res.status(401).json({ error: 'IncorrectPassword', message: 'Incorrect password' });
                }
            });
        } else {
            console.log("wrong user........")
            res.status(401).json({ error: 'UserNotFound', message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
};





module.exports = {
    signUp,
    login,
};