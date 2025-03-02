import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api"; 

const Login = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({
    name: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
    setErrorMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!detail.name || !detail.password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const response = await api.get("/user");
      const data = response.data;
      const user = data.find(
        (user) =>
          (detail.name === user.email || detail.name === user.name) &&
          user.password === detail.password
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setIsLoggedIn(true);
        setUserData(user);
        setErrorMessage(null);
        if (user.role === "admin") {
          navigate("/Admin");
        } else {
          navigate("/");
        }
      } else {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isLoggedIn ? (
        <div className="bg-white p-4 rounded shadow w-64 text-center">
          <h2 className="text-lg font-semibold">Welcome, {userData.name}!</h2>
          <p className="text-sm mb-2">{userData.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 w-full rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow w-64">
          <h4 className="text-lg font-semibold text-center mb-4">Login</h4>
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="text"
            placeholder="Username or Email"
            onChange={handleInput}
            value={detail.name}
            name="name"
          />
          <input
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            type="password"
            placeholder="Password"
            onChange={handleInput}
            value={detail.password}
            name="password"
          />
          {errorMessage && <p className="text-red-500 text-xs mb-4">{errorMessage}</p>}
          <button className="w-full p-2 bg-blue-500 text-white rounded">
            Login
          </button>
          <p className="text-sm mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">Register Here</Link>
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
