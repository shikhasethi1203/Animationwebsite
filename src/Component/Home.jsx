import React from 'react';
import web from "../Component/Images/Alpha.gif";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const Home = () => {
    return (
        <>
   <Common name="Welcome to Coading Reactjs"
 imgsrc= {web} 
  visit= "/service"
   btname="Get Started"
   />
        </>
    );
}

export default Home;
