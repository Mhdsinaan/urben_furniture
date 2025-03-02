import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../api/api";

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [user, setUser] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/user"); 
        console.log(response.data);
        
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <UsersContext.Provider value={{ user, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
}

export default UsersContext;
