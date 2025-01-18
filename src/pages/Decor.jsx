import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Dining() {
  const { posts } = useContext(DataContext);
  const decorData = posts?.filter((item) => item.category === "decor");

  if (!decorData || decorData.length === 0) {
    return (
      <p className="text-center text-gray-500">No decor items available.</p>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {decorData.map((item, index) => (
          <div
            key={index}
            className=" bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
          >
            <Link to={`ProductDetails/${item.id}`}>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>
              
              <div>
                <button className="">
                  <FaShoppingCart size={26} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dining;
