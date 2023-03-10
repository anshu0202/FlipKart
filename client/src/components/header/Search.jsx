
import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
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


const Search=()=>{
    return (  
        <SearchContainer>
          <InputSearchBase placeholder="Search for products,brands and more "  />
          <SearchIconWrapper>       
          <SearchIcon/> </SearchIconWrapper>
          </SearchContainer>
 )
}

export default Search;