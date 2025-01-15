import React, { useState } from "react";
 import { FaShoppingCart } from "react-icons/fa";
 import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Products from "../pages/Products";

function Navbar() {
  
  function eventBed() {
    const filteredProducts = products.filter((item) => item.category === "bedroom");
    setBed(filteredProducts);
    console.log(filteredProducts);
  
    

  }
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-red-900 shadow-lg">
      <div className="flex justify-between py-5 px-5">
        <div className="flex gap-3">
          <h1 className="logo">azaakki</h1>
          <Link to={"/"}>HOME</Link>
          <Link to={"/Bedroom"}onClick={eventBed}
          >Bedroom</Link>
          <Link to={"/Dining"}>DINING</Link>
          <Link to={"/Living"}>Living</Link>
        </div>
        <div className="fi">
          <h1>
            <input
              type="text"
              placeholder="search"
              className="border pl-2 rounded-xl border-black mr -inset-16  "
            />
          </h1>
        </div>
        { <div className="flex gap-7  ">
          <Link to={"/Registration"}>
            <FaUserPlus size={26} />
          </Link>
          <Link to={"/"}>
            <FaShoppingCart size={26} />
          </Link>
        </div> }
      </div>
    </div>
  );
}

export default Navbar;
