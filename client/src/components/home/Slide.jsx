import Carousel from 'react-multi-carousel';

// import 'react-multi-carousel/lib/style.css';

import 'react-multi-carousel/lib/styles.css'
import Countdown from 'react-countdown';

import {Box, Typography,Divider ,Button,styled} from '@mui/material'


const responsive={
 
    desktop:{
        breakpoint:{max:3000, min:1024},
        items:5
    },
    tablet:{
        breakpoint:{max:1024, min: 464},
        items:2
    },
    mobile:{
        breakpoint:{max:464, min:0},
        items:1
    }
};


const Component= styled(Box)`
  margin-top: 10px;
  background-color:#FFFFFF;
`

const Deal= styled(Box)`
   padding:15px 20px;
   display:flex;
`

const Timer= styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    color:#7f7f7f;
`


const DealText= styled(Typography)`
   font-size:22px;
    font-weight:600;
    margin-right:25px;
    line-height:32px;

`

const ViewAllButton= styled(Button)`
   margin-left:auto;
   background-color:#2874f0;
     border-radius:2px;
     font-size:13px;
     font-weight:600;

`

const Image= styled('img')({
    width:'auto',
    height:150
})




const Slider= ({products})=>{

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';


    // it has been used to format the time 
    const renderer=({hours,minutes,seconds})=>{
            return <Box variant="span" >
               {hours}:{minutes}:{seconds} Left
                
                 </Box>
    };

  return (
    <Component>
        <Deal>
            <DealText>
                Deal of the Day
            </DealText>

            <Timer>
                <img src={timerURL} alt="timer" style={{width:"24px"}} />
                  {/* time is given in milli second */}
                <Countdown  date={Date.now()+ 5.04e+7}  renderer={renderer}    />

            </Timer>

            <ViewAllButton variant='contained' color="primary" >
                View All
            </ViewAllButton>


        </Deal>
        <Divider/>

    <Carousel   responsive={responsive}
    swipeable={false}
    draggable={false}
    autoPlay={true}
    infinite={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    centerMode={true}
    itemClass="carousel-item-padding-40-px" containerClass='carousel-container'
dotListClass="custom-dot-list-style"
    
    >
            {
                products.map(product=>(

                    <Box  textAlign="center" style={{padding:"25px 15px"}}  >
                    <Image src={product.url} alt="products" />
                    </Box>
                ))
            }


        </Carousel>

        </Component>
  )
}

export default Slider;