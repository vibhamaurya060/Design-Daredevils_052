import React from 'react';
import Footer from './Footer';

const Home = () => {

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 w-96 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page!</h1>  
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Home;