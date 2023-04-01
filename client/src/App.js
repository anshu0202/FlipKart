// import logo from './logo.svg';
// import './App.css';

//components
import Header from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import Cart from "../src/components/cart/Cart"

import {Box} from '@mui/material'

import {BrowserRouter , Routes, Route} from 'react-router-dom'
import DetailView from './components/details/DetailViews';



function App() {
  return (
   
    <DataProvider >
       <BrowserRouter>
     <Header/>
     <Box style={{marginTop:"54px"}} >
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/product/:id" element={<DetailView/>} />
      <Route path="/cart" element={<Cart/>}/>   

     </Routes>
     </Box>
     </BrowserRouter>
    </DataProvider>
   
  );
}

export default App;
