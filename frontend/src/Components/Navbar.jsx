import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css'
import logo from '../assets/home.png';

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="nav" >
      <div className="flex justify-between aitem-center max-w-6xl mx-auto">
      <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
            
      />
        
        <div className="space-x-8">
          <Link to="/" className="hover:underline text-black font-bold text-xl">Home</Link>
          <Link to="/propertylisting">Property</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:underline loginBtn text-black font-bold text-l"
            >
              Logout
            </button>
          ) : (
            <>
              <button className='loginBtn'><Link to="/signup" className="hover:underline text-black font-bold text-l">Sign Up</Link></button>
              <button className='loginBtn'><Link to="/login" className="hover:underline text-black font-bold text-l">Log in</Link></button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
