

import axios from "axios"


import * as actionTypes from "../constants/productConstant"

const URL="http://localhost:5000"

export const getProducts= ()=>async(dispatch)=>{
      console.log("dispatch is ", typeof(dispatch))
      
    try{
        console.log("virat")
        const {data}= await axios.get(`${URL}/products`)
        console.log("response is   -->", data)
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS, payload:data})
    }
    catch(error){
        console.log("Error while calling getProducts API ", error.message);                
         dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
    }


}



