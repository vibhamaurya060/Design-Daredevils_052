import React, { useEffect, useState } from 'react';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import PropertyListings from './PropertyListings';

// // Initial property data
// const initialProperties = [
//     {
//       id: 1,
//       title: "Luxury 3-Bedroom House in Hyderabad",
//       location: {
//         address: "33 Banjara Avenue",
//         city: "Hyderabad",
//         state: "Telangana",
//         zipCode: "500033"
//       },
//       price: 20000000,
//       propertyType: "House",
//       images: "https://media.istockphoto.com/id/1415886887/photo/freshly-painted-craftsman-bungalow-house.jpg?s=612x612&w=0&k=20&c=lcwiyJqjUoIM0FfRb3TwV2BzUY8RS7oT9zFmZGv4nLI="
//     }
//   ];

  // Main Admin Dashboard
const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [properties, setProperties] = useState([]);

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

  // // Update property
  // const handleUpdateProperty = async (updatedProperty) => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/properties/${updatedProperty.id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(updatedProperty),
  //     });
  //     const updated = await response.json();
  //     setProperties(properties.map(prop => 
  //       prop.id === updated.id ? updated : prop
  //     ));
  //   } catch (error) {
  //     console.error('Error updating property:', error);
  //   }
  // };

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
    <div className="flex h-screen">
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
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
  );
};

export default AdminDashboard;