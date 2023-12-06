
import axios from 'axios';

const URL=process.env.REACT_APP_BACK_URL;


export const authenticateSignup= async(data)=>{
    // data is what we have to post
      try{
           const res= await axios.post(`${URL}/signup`,data)
        
        if(res){
            return res
        }
      }
      catch(error){
          console.log("Error while calling  sign up api", error.message)
      }
}

export const authenticateLogin= async(data)=>{
    // data is what we have to post
      try{
           const res= await axios.post(`${URL}/login`,data)
        
        if(res){
            console.log("login response is api js is ",res)
            return res
        }
      }
      catch(error){
          console.log("Error while calling  sign up api", error.message)
          return error.response;
      }
}


export const payUsingPaytm= async(data)=>{
    try{

       let response= axios.post(`${URL}/payment`, data);
       return response.data;
    }
    catch(error){

        console.log("Error while calling payment api", error.message)

    }
}