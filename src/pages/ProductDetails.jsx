import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { Link, useParams } from 'react-router-dom'


function ProductDetails() {
  const { posts } = useContext(DataContext)
  const { id } = useParams()
  const [find, setFind] = useState([])

  useEffect(() => {
    const filter = posts.filter((item) => item.id == id)
    setFind(filter)
  }, [posts, id])

  return (
    <div className="container mx-auto p-4">
      {find.length > 0 ? (
        find.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h1 className="text-3xl font-semibold text-gray-900 mb-4">{item.name}</h1>
              <p className="text-lg text-red-500 line-through mb-2">{item.old_price}</p>
              <p className="text-xl font-bold text-gray-900">{item.new_price} & free shipping</p>
              <p className="font-extralight">{item.detailOne}</p><span></span>
              
  
              <Link to={"/"}>back to home</Link>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Product not found.</p>
      )}
    </div>
  )
}

export default ProductDetails
