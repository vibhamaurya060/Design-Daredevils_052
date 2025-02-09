import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import PropertyListings from './PropertyListings';
import { FiMenu, FiX } from 'react-icons/fi';

// Main Admin Dashboard
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [properties, setProperties] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  // Fetch properties from JSON server
  const fetchProperties = async () => {
    try {
      const response = await fetch('https://design-daredevils-052.onrender.com/properties');
      const data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  // Create property
  const handleCreateProperty = async (newProperty) => {
    try {
      const response = await fetch('https://design-daredevils-052.onrender.com/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProperty),
      });
      const addedProperty = await response.json();
      setProperties([...properties, addedProperty]);
    } catch (error) {
      console.error('Error creating property:', error);
    }
  };

  // Update property
  const handleUpdateProperty = async (id, updatedProperty) => {
    try {
      const response = await fetch(`https://design-daredevils-052.onrender.com/properties/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProperty),
      });
      const updated = await response.json();
      setProperties((prevProperties) =>
        prevProperties.map((prop) =>
          prop.id === id ? { ...prop, ...updatedProperty } : prop
        )
      );
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  // Delete property
  const handleDeleteProperty = async (id) => {
    try {
      await fetch(`https://design-daredevils-052.onrender.com/properties/${id}`, {
        method: 'DELETE',
      });
      setProperties(properties.filter(prop => prop.id !== id));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  return (
    <div className='relative'>

      <div className="flex h-screen">

        {/* Top Navbar */}
        <nav className='h-16 bg-gray-800 fixed top-0 right-0 left-0 flex items-center px-4 md:px-6 z-20'>
          <button
            className='text-white md:hidden'
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </button>
          <h1 className='text-white font-semibold text-lg ml-6'>Admin Dashboard</h1>
        </nav>

        {/* Sidebar */}
        <div
          className={`
            fixed inset-y-0 left-0 z-30 bg-gray-800 text-white p-4 w-64 transform
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            transition-transform duration-300 md:translate-x-0 md:static
          `}
        >
          <Sidebar
            activeSection={activeSection}
            setActiveSection={(section) => {
              setActiveSection(section);
              setIsSidebarOpen(false);
            }}
          />
        </div>

        {/* Overlay for small screens */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          <div className="container mx-auto">
            {activeSection === 'dashboard' && (
              <Dashboard properties={properties} />
            )}

            {activeSection === 'properties' && (
              <PropertyListings
                properties={properties}
                onCreateProperty={handleCreateProperty}
                onUpdateProperty={handleUpdateProperty}
                onDeleteProperty={handleDeleteProperty}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
