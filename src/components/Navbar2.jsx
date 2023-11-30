import { Stack , Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { useState } from "react";


import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar2 = () => { 

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
    <Avatar  style={{padding : 5 , backgroundColor : 'gray'}} > DH </Avatar>
  </Stack>
) 

};

export default Navbar2;
