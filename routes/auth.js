import express from "express";

import { Router } from "express";

import transporter from "../transporter.js";
import crypto from 'crypto'
const router = Router();

let otpstore = {}

router.post('/send-otp',async (req,res) => {
    const {email } = req.body;
    const otp = crypto.randomInt(100000,999999);

    otpstore[email] = otp;
    await transporter.sendMail({
       
        from:process.env.email,
        to:email,
        subject: "Your verification OTP",
        html: `<h2>Your OTP is <b>${otp}</b></h2>`
    })
    return res.json({message: "OTP sent successfully"})
})

router.post('/verify-otp',(req,res) => {
    const {email,otp} = req.body;
    
    if(otpstore[email] && otpstore[email]==otp) return res.json({message:"OTP verified successfully!"});
    res.json({message:"Inavlid OTP!"});
})

export default router;