

import axios from "axios";

import * as actionType from "../constants/cardConstants";


const URL="http://localhost:5000";




export const addToCart = (id, quantity)=> async(dispatch) =>{
  try{

    await axios.get(`${URL}/product/id`);

  }
  catch(error){



  }


}


export const removeFromCart=()=>{

}
