import React from 'react';
import '../styles/Footer.css'
const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-100 py-6" >
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
          <p className="text-sm pl-10 text-gray-400">
            Our platform simplifies property discovery, providing <br/>  intuitive search and interactive features to help you <br/>  find your dream home or office effortlessly.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-gray-400 transition hover:text-white">Home</a></li>
            <li><a href="#" className="text-sm text-gray-400 transition hover:text-white">Search Properties</a></li>
            <li><a href="#" className="text-sm text-gray-400 transition hover:text-white">Favorites</a></li>
            <li><a href="#" className="text-sm text-gray-400 transition hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400">Email: properties@platform.com</p>
          <p className="text-sm text-gray-400">Phone: 1234567890</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 transition hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-400 transition hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 transition hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-gray-400 transition hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 Property Listing Platform. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
