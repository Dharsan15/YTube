import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  Login,
} from "./components";

import SignUp from "./components/SignUpPage";
import Navbar2 from "./components/Navbar2";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      {/* <Navbar /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Feed />
            </>
          }
        />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <>
              <Navbar2 />

              <Feed />
            </>
          }
        />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
