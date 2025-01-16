import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { Link } from 'react-router-dom';

function Livingroom() {
  const { posts } = useContext(DataContext);
  const LivingData = posts?.filter((item) => item.category === "livingroom");
 
  

  return (
    <div>
      {LivingData?.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <Link to={`ProductDetails/${item.id}`}>
          <img src={item.image} alt={item.name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Livingroom;
