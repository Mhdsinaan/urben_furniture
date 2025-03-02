import React, { useContext } from "react";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-200 via-blue-100 to-white shadow-lg">
      <div className="flex justify-between py-5 px-5">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-extrabold text-blue-800">UrbanWood</h1>

          <div className="ml-20 flex gap-4">
            <Link
              to="/"
              className="text-red-600 font-semibold hover:text-red-800 transition"
            >
              HOME
            </Link>
            <Link
              to="/Bedroom"
              className="text-black hover:text-gray-700 transition"
            >
              BEDROOM
            </Link>
            <Link
              to="/Dining"
              className="text-black hover:text-gray-700 transition"
            >
              DINING
            </Link>
            <Link
              to="/Livingroom"
              className="text-black hover:text-gray-700 transition"
            >
              LIVING
            </Link>
            <Link
              to="/Decor"
              className="text-black hover:text-gray-700 transition"
            >
              DECOR
            </Link>
          </div>
        </div>

        <div className="flex gap-7 items-center">
          <Link to="/Login" className="text-black hover:text-gray-600">
            <FaUserPlus size={26} />
          </Link>

          <Link to="/Cart" className="relative text-black hover:text-gray-600">
            <FaShoppingCart size={26} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
