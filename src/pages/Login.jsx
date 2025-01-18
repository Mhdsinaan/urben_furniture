import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  { Idcontext } from "../context/IdContext";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { user,active,setActive } = useContext(Idcontext);

  


  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault();
    const loginData = user?.find(
      (item) =>
        item.email == input.email && 
        item.password == input.password && 
        item.block == false
    );

     
       

    console.log(loginData);
    
    if (!loginData) {
      alert("Invalid email or password, or account is blocked.");
      
     } else {
   
      localStorage.setItem("user",JSON.stringify(loginData))
      setActive(loginData) 
        navigate('/')
      
     } 
     
      
 
  }
  useEffect(()=>{
    const res=localStorage.getItem("user")
   
    setActive(JSON.parse(res))
    
  },[])
    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInput({ ...input, [name]: value });
    };
    const logout=(()=>{
      localStorage.removeItem("user")
      setActive();
    })
    console.log("dataa",active);
    


    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        {active ? (
          <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
            
            <img 
              src="jgjj" 
              alt="User Image" 
              className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300 mb-4" 
            />
            
            <h1 className="text-xl font-semibold text-gray-700 mb-2">{`Name: ${active.username}`}</h1>
            <h1 className="text-lg text-gray-600 mb-6">{`Email: ${active.email}`}</h1>
        
            <div className="space-x-4">
              <Link to={'/Login'}>
                <button onClick={logout}  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200">
                  Log Out
                </button>
              </Link>
              <Link to={'/'}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        ):(
          <div className=" flex flex-col gap-6 bg-white p-14 rounded-lg shadow-lg">
          <h1 className="text-center text-xl font-bold capitalize">login</h1>
          <form onSubmit={handleData} className="flex flex-col gap-4">
            <input
              type="email"
              onChange={handleChange}
              value={input.email}
              placeholder="E-mail"
              required
              name="email"
              className="p-2 rounded border border-gray-300 outline-none"
            />

            <input
              type="password"
              onChange={handleChange}
              value={input.password}
              placeholder="Enter Your Password"
              required
              name="password"
              className="p-2 rounded border border-gray-300 outline-none"
            />

            <button
              type="submit"
              className="p-2 bg-green-900 text-white rounded hover:bg-black"
            >
              Login
            </button>
            <Link to={"/register"} className="text-sm">
              Create a new Account ?
            </Link>
          </form>
        </div>
        )}
      </div>
    );
  };


export default Login;
