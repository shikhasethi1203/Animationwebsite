import React from 'react';
import web from "../Component/Images/web.gif";
import {NavLink} from "react-router-dom";
import Common from "./Common"

const About = () => {
    return (
        <>
<Common name="Welcome to About Page Reactjs" imgsrc= {web}
  visit= "/contact"
   btname="Contact Now"
   
   
   />
        </>
    );
}

export default About;
