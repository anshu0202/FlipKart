import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema= new mongoose.Schema({
     firstname:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
     },
     lastname:{
        type:String,
        required: true,
        trim:true,
        min:5,
        max:20
     },
     
     username:{
        type:String,
        required: true,
        trim:true,
        unique: true,
        lowercase:true
     },
     email:{
        type:String,
        required: true,
        trim:true,
        unique: true,
        lowercase:true
     },
     password:{
          type:String,
          required:true
     },
     phone:{
        type:String,
        required:true
     }


})

// middlewear of hasing the value before entering in the db

// it is called before calling the save method
userSchema.pre("save",async function(next){

   if(this.isModified("password")){
      this.password= await bcrypt.hash(this.password,10);
      // we dont need to store confirm password in the database
      // this.confirmpassword=undefined
}
next();
})



const user= mongoose.model('user',userSchema);
export default user;

// trim is used to remove white spaces