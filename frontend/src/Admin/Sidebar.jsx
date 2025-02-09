import React from 'react';
import {
  LayoutDashboard,
  FileText,
  LogOut,

} from 'lucide-react';
import { useNavigate } from 'react-router';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate()

  let name = localStorage.getItem('AdminName')

  return (
    <>
      <div className="w-60 bg-gray-800 text-white p-4 ">
        <div className="mb-5 text-center">
          <h1 className="text-2xl font-bold">Hii👋, Admin {name}</h1>
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
              onClick={() => {
                localStorage.removeItem('AdminName')
                navigate('/admin')

              }}
            >
              <LogOut className="mr-3" /> Logout
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar