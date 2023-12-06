import User from "../model/user-schema.js";


import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken' 

const secretkey="787897"

const createToken= async ()=>{
        console.log("hii")
    const token =  await jwt.sign({_id:"6403149e9cb3036fa424dd5f"},"secretkey")
    console.log("token is ", token)
      //secret key require minimum 32 characters
}




// createToken();


export const userSignup=async (req,res)=>{
        try{
                const exist= await User.findOne({username:req.body.username})

                if(exist){
                    return res.status(401).json({message:'Username already exist'})
                }
                
                  console.log(req.body)

                // const password=await bcrypt.hash(req.body.password,10)        
                // console.log("hash password for ",req.body.password," is ",password)    
                // req.body.password=password                      

                const user=req.body;
                const newUser= new User(user);
                await newUser.save();
                console.log("new user is ", newUser)
                console.log("success!!!!")
                res.status(200).json({message:user});

        }
        catch(error){
                console.log("error while sign up", error.message)
                        console.log("failed22")
                res.status(500).json({message:error.message})
        }
}

export const userLogin= async(req, res)=>{

   try{
        const username= req.body.username;
        const password=req.body.password;

        const uu=await User.findOne({username:req.body.username})

        const pass= await bcrypt.compare(password,uu.password) 


      
        let user;
     if(pass){
         user=uu;
     }
      
        console.log("data  from backend is ", user)
        if(user){
                return res.status(200).json({data:user})
        }
        else{
                return res.status(401).json('Invalid login')
        }
   }
   catch(error){
        res.status(500).json('Error ', error.message)
   }

}