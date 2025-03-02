import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
    <div>
      
      <Navbar />
      </div>
      <div>


      <main className="flex-grow mt-[80px]">
        <Outlet />
      </main>
      </div>
      <div>
     
      <Footer />
      </div>
    
    </div>
  );
}

export default Layout;
