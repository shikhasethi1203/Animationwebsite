import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Search from "./Search";
// import SearchPage from "./SearchPage";

function Home() {
  return (
    <div className="home">
      {/* <h1>This is HOMEPAGES</h1> */}

      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home_inputContainer"></div>
        <Search/>
        {/* <Search hideButtons /> */}
        {/* <SearchPage /> */}
      </div>
    </div>
  );
}

export default Home;
