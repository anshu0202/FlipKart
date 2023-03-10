import NavBar from "./NavBar";
import Banner from "./Banner";
import Slider from "./Slide";

import {Box, styled } from '@mui/material';
import {useEffect} from 'react';

import { getProducts } from "../../redux/actions/productAction";


import { useDispatch , useSelector} from 'react-redux'

const Component=styled(Box)`
   padding:10px;
`


const Home=()=>{

    const dispatch=  useDispatch();

   const {products}= useSelector(state=>state.getProducts)

   // const {products}=getProducts;

   // getProducts.products
   // {products:[]}
  console.log("pro from redux is ",products)

    useEffect(()=>{
     dispatch(getProducts());
    }, [dispatch])


    return (
           <>
            <NavBar/>
            <Component>
            <Banner/>
            <Slider   products={products} />
            </Component>
           </> 
    ) ;
}
export default Home;