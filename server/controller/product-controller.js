
import Product from "../model/product-schema.js"


export const getProducts= async (req, res)=>{
        console.log("fun is called")
     try{

       const products= await Product.find({});
         console.log("products from atlas is ",products);
            res.status(200).json(products);
     }
     catch(error){
            res.status(500).json({message:error.message})
     }
}