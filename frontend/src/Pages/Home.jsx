import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 w-96 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h1>
        {/* <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white w-full py-2 rounded-lg"
        >
          Logout
        </button> */}
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Home;