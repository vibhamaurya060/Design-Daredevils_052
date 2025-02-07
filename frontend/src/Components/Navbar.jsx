import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <nav className="nav">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
        <div className="space-x-8">
          <Link to="/" className="hover:underline text-black font-bold text-xl">Home</Link>
          <Link to="/propertylisting" className="hover:underline">Property</Link>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="hover:underline text-black font-bold text-l flex items-center space-x-2"
              >
                <FiUser className="w-6 h-6" />
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
              className="hover:underline text-black font-bold text-l"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
