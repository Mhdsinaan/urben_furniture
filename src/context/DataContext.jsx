import React, { createContext, useEffect, useState, useContext } from "react";
import api from "../../api/api";
import axios from "axios";


export const DataContext = createContext();

 function DataProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/products");
        setPosts(response.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);



  ////////////// cart //////////////

  const adcart = async (item)=>{
    console.log(item);
    const cartdata = {cart:item}
    try{
      const res =await axios.post("http://localhost:3000/user/",cartdata);
      console.log(res)
    }
    
  }
  return (
    <DataContext.Provider value={{ posts, loading, error ,adcart}}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
