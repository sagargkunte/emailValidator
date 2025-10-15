import express from 'express';
import { config } from 'dotenv';
import { checkApiKey } from './middleware/checkApiKey';
import validate from 'deep-email-validator';
config();

const app = express();

app.use(express.json());

app.get("/validateEmail",checkApiKey,(req,res) => {
    const {email} = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email) return res.status(400).json({message: "Email not found"})
    
        if(regex.text(email)) {
            const response = validate(email).valid;
        }
        return res.send({valid:false})
})


app.listen(3000,() => {
    console.log("Server is running at http://localhost:3000")
})