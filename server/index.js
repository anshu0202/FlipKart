import express from 'express';
import Connection from './database/db.js'
import dotenv from 'dotenv'
import DefaultData from './default.js';
import cors from 'cors'
import Router from './routes/route.js';
import bodyParser from 'body-parser';


//security and authentication
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";


const app= express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router)


const PORT=5000


dotenv.config();

const USERNAME= process.env.DB_USERNAME
const PASSWORD= process.env.DB_PASSWORD

Connection(USERNAME,PASSWORD);


const securePassword= async( password )=>{
       

    
     //   default value is 10
        const passwordHash= await  bcrypt.hash(password,10);
     console.log("hashed password is ",passwordHash);


     console.log("Now matching the login credentials")
     const passwordmatch= await bcrypt.compare(password,passwordHash)

     console.log("match is ",passwordmatch)

     
}
// securePassword("anshu@123");

const createToken= async ()=>{
     console.log("hii")
 const token =  await jwt.sign({_id:"640324081a44c276fb764b60"},"secretkey")
 console.log("token is ", token)
   //secret key require minimum 32 characters

     // const userVer= await jwt.verify(token,"secretkey");
     // console.log("uesrvar is ",userVer)

}

createToken();


DefaultData();


app.listen(PORT,()=>{
     console.log("server has  been started  at 5000")
})


