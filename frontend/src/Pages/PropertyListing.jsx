import React, { useState, useEffect } from 'react';
import { Building2, MapPin, IndianRupee, Bath, Bed, Home, Calendar, Phone, Mail, Square } from 'lucide-react';
import Footer from './Footer';
import { useNavigate } from 'react-router';
import '../styles/Footer.css'

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  // Filter states
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [filterBedrooms, setFilterBedrooms] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-xl">Loading properties...</div>;
  if (error) return <div className="text-center text-xl text-red-500">Error: {error}</div>;

  // Filtering Logic
  const filteredProperties = properties.filter((property) => {
    return (
      property.title.toLowerCase().includes(search.toLowerCase()) &&
      (filterCity ? property.location.city === filterCity : true) &&
      (filterType ? property.propertyType === filterType : true) &&
      (filterPrice ? property.price <= parseInt(filterPrice) : true) &&
      (filterBedrooms ? property.bedrooms === parseInt(filterBedrooms) : true)
    );
  });


  // logic for single page
  function handelSinglePage(id){
    navigate(`/propertylisting/${id}`)
  }
  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-indigo-100 to-purple-200 p-6">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border p-3 rounded-md shadow-sm hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
          />
          
          {/* City Filter */}
          <select
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="w-full border p-3 rounded-md shadow-sm hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">All Cities</option>
            {[...new Set(properties.map(p => p.location.city))].map(city => <option key={city} value={city}>{city}</option>)}
          </select>
          
          {/* Property Type Filter */}
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full border p-3 rounded-md shadow-sm hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">All Property Types</option>
            {[...new Set(properties.map(p => p.propertyType))].map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          
          {/* Bedrooms Filter */}
          <select
            value={filterBedrooms}
            onChange={(e) => setFilterBedrooms(e.target.value)}
            className="w-full border p-3 rounded-md shadow-sm hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">All Bedrooms</option>
            {[...new Set(properties.map(p => p.bedrooms))].sort((a, b) => a - b).map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Bedroom' : 'Bedrooms'}</option>
            ))}
          </select>
          
          {/* Price Filter */}
          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="w-full border p-3 rounded-md shadow-sm hover:border-indigo-500 focus:ring-2 focus:ring-indigo-500 transition-all"
          >
            <option value="">All Prices</option>
            <option value="5000000">Up to ₹50L</option>
            <option value="7500000">Up to ₹75L</option>
            <option value="10000000">Up to ₹1Cr</option>
          </select>
        </aside>

        {/* Property Listings */}
        <main className="w-full md:w-3/4">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} onClick={()=>handelSinglePage(property.id)} className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
                  <img src={property.images} alt={property.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{property.title}</h3>
                    <p className="text-gray-600 flex items-center gap-1 mb-3"><MapPin className="w-4 h-4" /> {property.location.address}, {property.location.city}</p>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center gap-1 text-gray-600"><Bed className="w-4 h-4" /> {property.bedrooms} Beds</span>
                      <span className="flex items-center gap-1 text-gray-600"><Bath className="w-4 h-4" /> {property.bathrooms} Baths</span>
                      <span className="flex items-center gap-1 text-gray-600"><Square className="w-4 h-4" /> {property.squareFootage} sq.ft</span>
                    </div>
                    <p className="text-lg font-bold text-blue-600 mt-3 flex items-center gap-1"><IndianRupee className="w-5 h-5" /> {(property.price / 100000).toFixed(1)}L</p>
                    <div className="border-t pt-3 mt-3 flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Phone className="w-4 h-4" /> <a href={`tel:${property.agent.phone}`} className="text-blue-600 hover:underline">{property.agent.phone}</a></span>
                      <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> <a href={`mailto:${property.agent.email}`} className="text-blue-600 hover:underline">{property.agent.email}</a></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">No properties found.</p>
          )}
        </main>
      </div>
     
      </div>
      <div >
      <Footer/>
      </div>
    </>
    
      
   
  );
};

export default PropertyListing;
