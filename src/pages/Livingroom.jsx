import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Livingroom() {
  const { posts } = useContext(DataContext);
  const LivingData = posts?.filter((item) => item.category === "livingroom");

  return (
     <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {LivingData.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
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
          
            <div className="flex justify-end mt-4">
              <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all">
                <FaShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Livingroom;
