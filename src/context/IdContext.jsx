import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'



export const Idcontext = createContext()
function IdContext({children}) {
  const [user, setUser] = useState([])
  const[active,setActive]=useState()

  console.log(active);
  
  

  useEffect(()=>{
    const fetch = async()=>{
      const response = await axios.get('http://localhost:3000/user')
      console.log("response",response);
      
      setUser(response.data)
    }
    fetch()
  },[])
  return (
    <Idcontext.Provider value={{user,active,setActive}}>
      {children}
    </Idcontext.Provider>
  )
}

export default IdContext
