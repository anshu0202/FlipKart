
import { useState , useContext} from 'react'

import {Dialog} from '@mui/material'
import {Box,styled, TextField, Button, Typography } from '@mui/material'
import { authenticateSignup, authenticateLogin } from '../../service/api'

import { DataContext } from '../../context/DataProvider'


const Component= styled(Box)`
     height:70vh;
     width:90vh;
`
const Image=styled(Box)`
    background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:83%;
    width:28%;
    padding:45px 35px;
    & > p, & >h5{
        color: #FFFFFF;
        font-weight:600;
    }
`
const Wrapper= styled(Box)`
 display:flex;
 flex-direction:column;
 padding:25px 35px;
 flex:1;
 & > div , & > button, & > p{
    margin-top:20px;
 }

`
const LoginButton= styled(Button)`
   text-transform:none;
   background:#FB641B;
   color:#ffffff;
    height:48px;
    border-radius:2px;

`
const RequestOTP= styled(Button)`
   text-transform:none;
   background:#fff;
   color:#2874f0;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`
const Text= styled(Typography)`
font-size:12px;
color:  #878787;
`
const CreateAccount=styled(Typography)`
   font-size: 14px;
   text-align:center;
   color:#2874f0;
   font-weight:600;
   cursor:pointer;
`

const accountInitialValues={
    login:{
        view:'login',
        heading:'Login',
        subHeading:"Get access to your Orders, Wishlist and Recommendations"
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subHeading:"Sign up with your mobile number to get started"
    }
}


const Error=styled(Typography)`
 font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-wieght:600
`

const signupInitialValues={
      firstname:'',
      lastname:"",
      username:"",
      email:"",
      password:"",
      phone:""
}

const loginInitialValues={
    username:"",
    password:""
}



const LoginDialog=({open, setOpen})=>{
     const handleClose=()=>{
        // console.log("hii")
        setOpen(false);
        toggleAccount(accountInitialValues.login)
        setError(false);
     }
  

        const {setAccount}=useContext(DataContext)
        
        const[account,toggleAccount]=useState(accountInitialValues.login);
        const [login,setLogin]=useState(loginInitialValues)

        const[signup, setSignup]=useState(signupInitialValues)

        const [error,setError]=useState(false);

        const toggleSignup=()=>{

            toggleAccount(accountInitialValues.signup)
        }


        const onInputChange=(e)=>{
                setSignup({...signup, [e.target.name]:e.target.value})
                console.log(signup)
        }

        const signupUser= async()=>{
                let res=  await authenticateSignup(signup);
                if(!res){
                        return ;
                }

                console.log("data  from backend ",res);
                handleClose();
                setAccount(signup.firstname)
        }

        const onValueChange=(e)=>{
                setLogin({...login,[e.target.name]:e.target.value})
        }

        const loginUser= async()=>{

              let res=  await authenticateLogin(login);
              console.log("login res ", res)
              if(res.status===200){
                 handleClose();
                  setAccount(res.data.data.firstname)
              }
              else{
                    setError(true)
                console.log("user dose nir exist")
              }

        }



        return ( 
            <Dialog open={open} onClose={handleClose}  PaperProps={{sx:{maxWidth:'unset'}}} >
                        <Component>
                            <Box style={{display:"flex", height:'100%'}}>

                          
                            <Image>
                            
                                    <Typography  variant='h5'>
                                        {account.heading}
                                    </Typography>
                                    <Typography style={{marginTop:20}} >
                                       {account.subHeading}
                                    </Typography>
                            </Image>
                         {
                            account.view === 'login'
                            ?                         
                            <Wrapper>
                                <TextField variant='standard' placeholder='Enter Username' onChange={(e)=>onValueChange(e)} 
                                name="username"
                                ></TextField>
                                {

                                error &&
                                <Error>
                                    Please Enter valid username or password
                                </Error>
}
                                <TextField variant='standard' 
                                name='password'
                                onChange={(e)=>onValueChange(e)}placeholder='Enter Password'  ></TextField>
                                <Text>
                                By continuing, you agree to Flipkart's Terms of Use and Privacy Policy
                                </Text>
                                <LoginButton 
                                onClick={()=>loginUser()}
                                >Login</LoginButton>
                                <Typography style={{textAlign:'center'}}>
                                    OR
                                </Typography>
                                <RequestOTP>Request OTP </RequestOTP>
                                <CreateAccount onClick={()=>toggleSignup()} >New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant='standard'
                                onChange={(e)=>onInputChange(e)}
                                placeholder='Enter Firstname' name="firstname" ></TextField>
                                <TextField variant='standard'
                                name="lastname"
                                 onChange={(e)=>onInputChange(e)} 
                                placeholder='Enter Lastname'  ></TextField>
                                <TextField variant='standard'
                                name="username"
                                 onChange={(e)=>onInputChange(e)}
                                placeholder='Enter Username'  ></TextField>
                                <TextField variant='standard'
                                name='email'
                                 onChange={(e)=>onInputChange(e)}
                                placeholder='Enter Email'  ></TextField>
                                <TextField variant='standard' 
                                name="password"
                                 onChange={(e)=>onInputChange(e)}
                                placeholder='Enter Password'  ></TextField>
                                <TextField variant='standard'
                                name="phone"
                                 onChange={(e)=>onInputChange(e)}
                                placeholder='Enter Phone'  ></TextField>
                              
                                <LoginButton onClick={()=>signupUser()} >Continue</LoginButton>
                               
                            </Wrapper>
}
                            </Box>
                        </Component>
            </Dialog>
   );
}

export default LoginDialog