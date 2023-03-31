import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState , useContext} from "react";

//Components
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper=styled(Box)(({theme})=>({
    display:"flex",
    margin: "0 3% 0 auto",
   ' & > *':{
           marginRight: "40px !important",
           fontSize:"16px",
           cursor:"pointer",          
           alignItems:"center"
   },
    [theme.breakpoints.down("md")]:{
        display:"block"
    }

}))
 

const Container= styled(Box)(({theme}) => ({
    display:"flex",

    [theme.breakpoints.down("md")]:{
        display:"block"
    }


})) 

const LoginButton= styled(Button)`
 color:#2874f0;
 background:#FFFFFF;
//  margin-left:5px;
 text-transform:none;
 padding:5px 40px;
   border-radius:2px;
      box-shadow:none;
      font-weight:600;
      height:32px;
      margin-top:5px;
`



const CustomButtons=()=>{

    const  {account, setAccount}=useContext(DataContext)

    const [open,setOpen]= useState(false);
    const openDialog=()=>{
        setOpen(true);
    }

   return (
    <Wrapper>

        {
            account? <Profile  account={account} setAccount={setAccount} />
            :
        
            <LoginButton variant="contained" onClick={()=>openDialog()} >LOGIN</LoginButton>
        }
                <Typography style={{marginTop:3, width:135 }} >
                     Become a Seller
                </Typography>
                <Typography  style={{marginTop:3}}  >
                     More
                </Typography>
                <Container>
                <ShoppingCartIcon/>
                    <Typography>                  
                            Cart
                    </Typography>
                </Container>
                <LoginDialog  open={open} setOpen={setOpen}/>
    </Wrapper>
   ) 
}

export default CustomButtons;