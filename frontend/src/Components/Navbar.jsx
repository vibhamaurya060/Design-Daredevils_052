import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiUser, FiMenu, FiX } from "react-icons/fi"; 
import "../styles/Navbar.css";
import logo from "../assets/home.png";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="nav">
      <div className="flex justify-between items-center max-w-8xl px-16 py-3">
        {/* Logo */}
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full cursor-pointer"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className="bg-black hover:bg-white text-white hover:text-black font-bold text-lg"
            style={{
              border: "1px solid teal",
              padding: "5px 15px",
              borderRadius: "50px",
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/propertylisting"
            className="bg-black hover:bg-white text-white hover:text-black font-bold text-lg"
            style={{
              border: "1px solid teal",
              padding: "5px 15px",
              borderRadius: "50px",
            }}
          >
            Property
          </NavLink>
          {user ? (
            <div className="relative" >
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="bg-black hover:bg-white text-white hover:text-black font-bold flex items-center space-x-2"
                style={{
                  border: "1px solid teal",
                  padding: "5px 15px",
                  borderRadius: "50px",
                }}
              >
                <FiUser className="w-6 h-6 rounded-3xl border-2 border-white hover:border-2 hover:border-black" />
                <span>{user.username}</span>
              </button>
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-30  bg-white border rounded-lg shadow-lg z-10">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-md hover:bg-gray-100 text-black rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="bg-black hover:bg-white text-white hover:text-black font-bold flex items-center space-x-2"
              style={{
                border: "1px solid teal",
                padding: "5px 15px",
                borderRadius: "50px",
                marginRight:"10px"
              }}
            >
              Log in
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden text-black text-2xl focus:outline-none"
        >
          {showMobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden fixed top-16 right-4 bg-white shadow-lg rounded-lg w-40 py-4 z-50">
          <div className="flex flex-col items-center space-y-3">
            <NavLink
              to="/"
              className="bg-black hover:bg-white text-white hover:text-black font-bold text-sm w-2/3 text-center"
              style={{
                border: "1px solid teal",
                paddingTop: "5px",
                paddingBottom:"6px",
                borderRadius: "50px",
              }}
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/propertylisting"
              className="bg-black hover:bg-white text-white hover:text-black font-bold text-sm w-2/3 text-center"
              style={{
                border: "1px solid teal",
                paddingTop: "6px",
                paddingBottom:"8px",
                borderRadius: "50px",
              }}
              onClick={() => setShowMobileMenu(false)}
            >
              Property
            </NavLink>
            {user ? (
            <div className="relative" >
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="bg-black hover:bg-white text-white hover:text-black font-bold flex items-center space-x-2"
                style={{
                  border: "1px solid teal",
                  padding: "4px 20px",
                  borderRadius: "50px",
                }}
              >
                <FiUser className="w-6 h-6 rounded-3xl border-2 border-white hover:border-2 hover:border-black" />
                <span>{user.username}</span>
              </button>
              {showProfileMenu && (
                <div className="absolute left-0 mt-2 w-20 bg-white border rounded-lg shadow-lg z-10">
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
            <NavLink
              to="/login"
              className="bg-black hover:bg-white text-white hover:text-black font-bold text-sm w-2/3 text-center"
              style={{
                border: "1px solid teal",
                paddingTop:"5px",
                paddingBottom:"8px",
                borderRadius: "50px",
              }}
            >
              Log in
            </NavLink>
          )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
