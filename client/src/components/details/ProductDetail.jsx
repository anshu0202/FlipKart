
import { Box, Typography, styled, Table, TableRow,TableCell, TableBody, } from "@mui/material";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const SmallText=styled(Box)`
font-size:14px;
vertical-slign:baseline

&>p{
    font-size:14px;
    margin-top:10px;

}
`
const StyledDadge= styled(LocalOfferIcon)`

    margin-right:10px;
    color: green;
    font-size:15px;
`
const ColumnText= styled(TableRow)`
  font-size: 14px;
  vertical-align:baseline;
  &> td{
    font-size:14px;
    margin-top:10px;
    border:none
  }

`



const ProductDetail=({product})=>{

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date=new Date(new Date().getTime()+(5*24*60*60*1000))

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <>

<Typography  >  {product.title.longTitle}
                        </Typography>
                        <Typography  style={{marginTop:5, color:'#878787', fontSize:14}}  >
                            8 Ratings & 1 Reviews
                            <Box component="span" >
                               < img  src={fassured} alt="loading"  style={{width:77, marginLeft:20}}  />
                            </Box>
                        </Typography>

              <Typography>
                            <Box   component="span" style={{fontSize:28}} >
                            ₹ {
                                    product.price.cost
                                }
                            </Box>
                            &nbsp; &nbsp; &nbsp;

                            <Box   component="span" style={{color:"#878787"}} >
                               <strike> ₹ {
                                       product.price.mrp
                                }
                                </strike>
                            </Box>
                            &nbsp; &nbsp; &nbsp;
                            <Box   component="span" style={{color:'#388E3C'}}  >
                                {
                                    product.price.discount
                                }
                            </Box>                      
                        </Typography>
                        <Typography  style={{ display:"flex", alignItems:"center"}} >
                        <StyledDadge/>
                            Available Offers
                        </Typography>
                        <SmallText>
                        <Typography style={{ display:"flex", alignItems:"center"}} >
                        <StyledDadge/>
                            Special PriceGet at flat ₹449 T&C
                            </Typography>
                            <Typography style={{ display:"flex", alignItems:"center"}} >
                            <StyledDadge/>
                            Bank Offer 10% off on ICICI Bank Credit Cards, up to ₹300. On orders of ₹1750 and above T&C
                            </Typography>
                            <Typography style={{ display:"flex", alignItems:"center"}} >
                            <StyledDadge/>
                            Buy this Product and Get Extra ₹500 Off on Bikes & Scooters T&C
                            </Typography>

                            <Typography style={{ display:"flex", alignItems:"center"}} >
                            <StyledDadge/>
                            Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C
                            </Typography>
                            
                            </SmallText>

                            <Table>
                                <TableBody>
                                    <ColumnText>
                                        <TableCell style={{color:'#878787'}} >
                                            Delivery
                                        </TableCell>
                                        <TableCell style={{fontWeight:600}}>
                                            Delivery by {date.toDateString()} | ₹50
                                        </TableCell>

                                    </ColumnText>
                                    
                                    <ColumnText>
                                        <TableCell style={{color:'#878787'}} >
                                            Warranty
                                        </TableCell>
                                        <TableCell style={{fontWeight:600}}>
                                           No Warranty
                                        </TableCell>

                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color:'#878787'}} >
                                            Seller
                                        </TableCell>
                                        <TableCell  >
                                           
                                             <Box component="span" style={{color:'#2874f0'}}>
                                                SuperComNet                                                
                                                </Box>     
                                                <Typography>
                                                    GST invoice available
                                                </Typography>
                                                <Typography>
                                                    View more sellers starting from ₹{product.price.cost}
                                                </Typography>
                                </TableCell>

                                    </ColumnText>

                                    <ColumnText>
                                        <TableCell colSpan={2} >
                                            <img src={adURL} alt="logo" style={{width:390}} />
                                        </TableCell>
                                       

                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color:'#878787'}} >
                                            Description
                                        </TableCell>
                                        <TableCell >
                                           {product.description}
                                        </TableCell>

                                    </ColumnText>


                                </TableBody>

                            </Table>

        </>
    )
}

export default ProductDetail;