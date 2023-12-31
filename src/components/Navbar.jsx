import { Stack , Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";


import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar = () => { 

  const [toggle , settoggle] = useState(true);

  const handleToggle = () => {
     settoggle(!toggle);
  }
  
  const navigate = useNavigate();

  const handleLogin = () => {
     navigate('/login');
  }
  
  return (
  

  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <h2 className="title" style={{color : "white" }} >YTube</h2>
    </Link>
    <SearchBar />
    <Avatar  style={{display : toggle ? 'none' : 'inline' , textAlign : 'center' , width : 45 , height : 30, paddingTop : 10 , paddingBottom : 0}} > DH </Avatar>
    <Button  onClick={ handleLogin } style={{color : 'white' , backgroundColor : 'red' , marginBottom : 5 , marginLeft : 5 , display : toggle ? 'block' : 'none'}} variant="outlined" >Login</Button>
  </Stack>
) 

};

export default Navbar;
