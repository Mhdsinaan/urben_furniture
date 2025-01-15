import React from 'react'

function Bedroom({products}) {
    const [bed,seTBED]=useState([])
    useEffect(()=>{
      seTBED(products.filter((val)=>{val.category==="bedroom"}))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Bedroom
