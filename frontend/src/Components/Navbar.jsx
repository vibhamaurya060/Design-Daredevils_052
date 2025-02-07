import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";

import "../styles/Navbar.css";
import logo from "../assets/home.png";
import { FiUser } from "react-icons/fi"; 
import { useAuth } from "../Context/AuthContext"; 

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(); 
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout(); 
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="nav" >
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img
        onClick={()=>navigate('/')}
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full"
        /> 
        <div className="space-x-8" style={{width:"43%", display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div>
          <NavLink to="/" className=" bg-black hover:bg-white text-white hover:text-black font-bold text-lg" style={{border: "1px solid teal", padding:"5px 15px 5px 15px", borderRadius:"50px", }}>Home</NavLink>
          </div>
          <div>
          <NavLink to="/propertylisting"  className=" bg-black hover:bg-white text-white hover:text-black font-bold text-lg" style={{border: "1px solid teal", padding:"5px 15px 5px 15px", borderRadius:"50px", }} >Property</NavLink>

          </div>
          <div style={{display:"flex", alignItems:"center"}}>
          {user ? (
            <div className="relative" >
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className=" bg-black hover:bg-white text-white hover:text-black font-bold text-l flex items-center space-x-2"
                style={{border: "1px solid teal", padding:"5px 15px 5px 15px", borderRadius:"50px", }} 
              >
                <FiUser className="w-6 h-6 rounded-3xl border-2 border-white hover:border-2 hover:border-black" />
                <span>{user.username}</span>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  {user.role === "admin" && (
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm hover:bg-gray-100 text-black"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      Dashboard
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-black"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className=" bg-black hover:bg-white text-white hover:text-black font-bold text-l flex items-center space-x-2"
              style={{border: "1px solid teal", padding:"5px 15px 5px 15px", borderRadius:"50px", }}
            >
              Log in
            </Link>
          )}
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;