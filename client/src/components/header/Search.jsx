
import { InputBase, Box, styled, ListItem, List } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';

import {getProducts} from '../../redux/actions/productAction'

import { Link } from "react-router-dom";

const SearchContainer=styled(Box)`
   background:#fff;
   width:400px;
   border-radius:2px;
        margin-left:10px;
        display:flex;
`;

const InputSearchBase=styled(InputBase)`
  width:100%;
  padding-left:20px;
   font-size:unset;
`;
const SearchIconWrapper= styled(Box)`
  color:blue;
  cursor:pointer;
  padding:5px;
  display:flex;
`
const ListWrapper= styled(List)`
  position:absolute;
  background:#FFFFFF;
   color:  #000;
   margin-top:36px;
`





const Search=()=>{

  const [text, setText]=useState("");

    const {products}=useSelector(state => state.getProducts);

    const dispatch= useDispatch();

    useEffect(()=>{
      dispatch(getProducts());

    }, [dispatch]);

    const getText=(text)=>{
        setText(text);
    }

    return (  
        <SearchContainer>
          <InputSearchBase onChange={(e)=>getText(e.target.value)}  value={text}   placeholder="Search for products,brands and more "  />
          <SearchIconWrapper>       
          <SearchIcon/> </SearchIconWrapper>
            {
              text &&
               <ListWrapper style={{cursor:"pointer"}} >
                 {
                    products?.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase()))?.map( (product,id)=>(
                      <ListItem>            
                          <Link  key={id} to={`/product/${product.id}`} onClick={()=>setText("")} style={{textDecoration:"none", color:"inherit"}}>
                          {
                          product.title.longTitle
}
                          </Link>
                        
                      </ListItem>
                    ))
                }
                </ListWrapper>
            }
          </SearchContainer>
 )
}

export default Search;