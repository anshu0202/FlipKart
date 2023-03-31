import {Box, styled } from '@mui/material'
import Slide from './Slide';



const Component= styled(Box)`
display:flex;
`
const LeftComponent= styled(Box)(({theme})=>({
    width:"83%",
    [theme.breakpoints.down('md')]:{
         width:"100%"
    }
}))



const RightComponent=styled(Box)(({theme})=>({
    
    background:"gray",
    padding:"5px",
     marginTop:"10px",
     marginLeft:"10px",
     witdh:"17%",
     textAlign:"center",
     [theme.breakpoints.down('md')]:{
        display:'none'
     }
 
}))





const  MidSlide=({products, title, timer})=>{

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Component>
        <LeftComponent>
            <Slide  products={products} title={title} timer={timer}/>
            </LeftComponent>
        <RightComponent>
          <img src={adURL} alt="" style={{width:217}} />
        </RightComponent>

    </Component>
    )
}


export default MidSlide;