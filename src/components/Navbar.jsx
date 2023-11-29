import { Stack , Button } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
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
    <Button variant="contained" >Login</Button>
  </Stack>
);

export default Navbar;
