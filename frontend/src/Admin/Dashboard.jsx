import React from 'react';
import { Home, DollarSign, Layers, User, Tag, MapPin } from 'lucide-react'; // Import Lucide icons

const Dashboard = ({ properties = [] }) => {
  if (!Array.isArray(properties)) properties = []; 

  const totalValue = properties.reduce((sum, prop) => sum + (prop.price || 0), 0);
  const propertyTypes = [...new Set(properties.map((p) => p.propertyType || 'Unknown'))].join(', ');

  const topAgentData = properties.reduce((acc, prop) => {
    const agentName = prop.agent?.name || 'Unknown';
    acc[agentName] = (acc[agentName] || 0) + 1;
    return acc;
  }, {});
  const [topAgentName, topAgentCount] = Object.entries(topAgentData).sort((a, b) => b[1] - a[1])[0] || [];

  const mostExpensive = properties.reduce(
    (max, prop) => (prop.price > (max.price || 0) ? prop : max),
    {}
  );

  const cities = properties.reduce((acc, prop) => {
    const city = prop.location?.city || 'Unknown';
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const sortedProperties = [...properties].sort(
    (a, b) => new Date(b.addedDate || 0) - new Date(a.addedDate || 0)
  );
  const recentProperties = sortedProperties.slice(0, 3);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Dashboard Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Total Properties */}
          <div className="bg-blue-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Home className="text-blue-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Total Properties</h3>
              <p className="text-xl font-semibold text-blue-600">{properties.length}</p>
            </div>
          </div>

          {/* Total Value */}
          <div className="bg-green-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <DollarSign className="text-green-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Total Value</h3>
              <p className="text-xl font-semibold text-green-600">₹{totalValue.toLocaleString()}</p>
            </div>
          </div>

          {/* Property Types */}
          <div className="bg-purple-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Layers className="text-purple-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-2xl font-bold text-gray-700">Property Types</h3>
              <p className="text-lg text-gray-600">{propertyTypes}</p>
            </div>
          </div>

          {/* Top Agent */}
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <User className="text-yellow-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Top Agent</h3>
              <p className="text-l text-gray-600">
                {topAgentName || 'N/A'} ({topAgentCount || 0} properties)
              </p>
            </div>
          </div>

          {/* Most Expensive Property */}
          <div className="bg-orange-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <Tag className="text-orange-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Most Expensive Property</h3>
              <p className="text-l text-gray-600">{mostExpensive.title || 'N/A'}</p>
              <p className="text-lg font-semibold text-orange-600">
                ₹{(mostExpensive.price || 0).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Recently Added Properties */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md flex flex-col items-center text-center">
            <MapPin className="text-gray-600 w-8 h-8 mb-4" />
            <div>
              <h3 className="text-xl font-bold text-gray-700">Recently Added Properties</h3>
              <ul className="space-y-1">
                {recentProperties.map((prop) => (
                  <li key={prop.id} className="text-l text-gray-700">
                    {prop.title || 'Untitled'} - ₹{(prop.price || 0).toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Properties by City - Three Columns Layout */}
<div className="bg-teal-50 p-6 rounded-lg shadow-md col-span-3">
  <MapPin className="text-teal-600 w-10 h-10 mb-4 mx-auto" />
  <div className="text-center mb-8">
    <h3 className="text-2xl font-semibold text-gray-700">Properties by City</h3>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
    {Object.entries(cities).map(([city, count]) => (
      <div key={city} className="text-center text-lg text-teal-600">
        <p>{city}:</p>
        <p className="font-semibold text-gray-700">{count} properties</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
