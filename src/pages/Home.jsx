import React, { useEffect, useState } from "react";
import home from "../assets/images/home.png";


function Home() {
 
  return (

    <div className="relative w-screen h-screen ">
      <img className="w-full h-full " src={home} alt="Home" />
      
    </div>
  );
}

export default Home;
