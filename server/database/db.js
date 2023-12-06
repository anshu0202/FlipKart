
import mongoose from 'mongoose'


export const Connection=async (username, password)=>{
       
   const URL=`mongodb://${username}:${password}@ac-ctynwvb-shard-00-00.f7hhknb.mongodb.net:27017,ac-ctynwvb-shard-00-01.f7hhknb.mongodb.net:27017,ac-ctynwvb-shard-00-02.f7hhknb.mongodb.net:27017/E-COMMERCE?ssl=true&replicaSet=atlas-s2ei6t-shard-0&authSource=admin&retryWrites=true&w=majority`;
        try{
         const result=  await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})
         console.log("connected to ATLAS")
        }
         catch(error){
            console.log("Error while connecting is ", error.message)
         }
        
}

export default Connection;


