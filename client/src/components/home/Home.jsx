import NavBar from "./NavBar";
import Banner from "./Banner";
import Slider from "./Slide";

import {Box, styled } from '@mui/material';
import {useEffect} from 'react';

import { getProducts } from "../../redux/actions/productAction";
import MidSlide from "./MidSlide";

import MidSection from "./MidSection";

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
            <MidSlide   products={products} title="Deal of the day" timer={true} />
            <MidSection/>
            <Slider   products={products} title="Discounts for you" timer={false} />
            <Slider   products={products} title="Suggested Items"  timer={false}/>
            <Slider   products={products} title="Recommended Items" timer={false} />
            <Slider   products={products}  timer={false}title="Trending Offers" />
            <Slider   products={products}  timer={false} title="Season's top picks" />
            <Slider   products={products} timer={false} title="Top deal on accessories" />
            </Component>
           </> 
    ) ;
}
export default Home;