import React, { useContext } from "react";
import { useData } from "../context/DataContext";


function Products() {
  const { posts, loading, error } = useData();
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return(
    <div>
        {
            posts.map((item)=>(
                <div key={item.id}>
                  <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    
                </div>
            ))
        }
    </div>
  )
}

export default Products;