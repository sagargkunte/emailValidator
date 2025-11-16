import nodemailer from 'nodemailer'
import { config } from 'dotenv';
config();

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
})


export default transporter;