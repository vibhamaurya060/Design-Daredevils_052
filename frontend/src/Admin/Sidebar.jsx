import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  LogOut,
  Pencil, 
  Trash2, 
  Plus 
} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold">Property Admin</h1>
      </div>
      <nav>
        <ul>
          <li 
            className={`p-3 cursor-pointer flex items-center ${activeSection === 'dashboard' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('dashboard')}
          >
            <LayoutDashboard className="mr-3" /> Dashboard
          </li>
          <li 
            className={`p-3 cursor-pointer flex items-center ${activeSection === 'properties' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('properties')}
          >
            <FileText className="mr-3" /> Property Listings
          </li>
          <li 
            className="p-3 cursor-pointer flex items-center hover:bg-gray-700 mt-auto"
            onClick={() => alert('Logout functionality to be implemented')}
          >
            <LogOut className="mr-3" /> Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar