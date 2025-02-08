import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";

const PropertyListings = ({
  properties,
  onCreateProperty,
  onUpdateProperty,
  onDeleteProperty,
}) => {
  const [editingProperty, setEditingProperty] = useState(null);
  const [propertyForm, setPropertyForm] = useState({
    title: "",
    description: "",
    price: "",
    location: { address: "", city: "", state: "", zipCode: "" },
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    amenities: "",
    images: "",
    agent: { id: "", name: "", phone: "", email: "" },
    availability: "",
  });

  const handleChange = (field, value) => {
    if (field.includes("location.")) {
      const locationField = field.split(".")[1];
      setPropertyForm({
        ...propertyForm,
        location: { ...propertyForm.location, [locationField]: value },
      });
    } else if (field.includes("agent.")) {
      const agentField = field.split(".")[1];
      setPropertyForm({
        ...propertyForm,
        agent: { ...propertyForm.agent, [agentField]: value },
      });
    } else {
      setPropertyForm({ ...propertyForm, [field]: value });
    }
  };


  const handleSave = () => {
    if (!propertyForm.title || !propertyForm.price) {
      alert("Please fill in required fields.");
      return;
    }
  
    const formattedProperty = {
      ...propertyForm,
      price: Number(propertyForm.price),
      bedrooms: Number(propertyForm.bedrooms),
      bathrooms: Number(propertyForm.bathrooms),
      squareFootage: Number(propertyForm.squareFootage),
      amenities: propertyForm.amenities.split(",").map((item) => item.trim()),
    };
  
    if (editingProperty) {
      onUpdateProperty(editingProperty.id, formattedProperty);
    } else {
      onCreateProperty(formattedProperty);
    }
  
    resetForm();
  };
  
  const resetForm = () => {
    setEditingProperty(null);
    setPropertyForm({
      title: "",
      description: "",
      price: "",
      location: { address: "", city: "", state: "", zipCode: "" },
      propertyType: "",
      bedrooms: "",
      bathrooms: "",
      squareFootage: "",
      amenities: "",
      images: "",
      agent: { id: "", name: "", phone: "", email: "" },
      availability: "",
    });
  };

  const handleEdit = (property) => {
    setEditingProperty(property);
    setPropertyForm({
      title: property.title || "",
      description: property.description || "",
      price: property.price?.toString() || "",
      location: {
        address: property.location?.address || "",
        city: property.location?.city || "",
        state: property.location?.state || "",
        zipCode: property.location?.zipCode || "",
      },
      propertyType: property.propertyType || "",
      bedrooms: property.bedrooms?.toString() || "",
      bathrooms: property.bathrooms?.toString() || "",
      squareFootage: property.squareFootage?.toString() || "",
      amenities: property.amenities?.join(",") || "",
      images: property.images || "",
      agent: {
        id: property.agent?.id || "",
        name: property.agent?.name || "",
        phone: property.agent?.phone || "",
        email: property.agent?.email || "",
      },
      availability: property.availability || "",
    });
  };

  return (
    <div className="p-6">
      {/* Form Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          {editingProperty ? "Edit Property" : "Add New Property"}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Title"
            value={propertyForm.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Description"
            value={propertyForm.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={propertyForm.price}
            onChange={(e) => handleChange("price", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Address"
            value={propertyForm.location.address}
            onChange={(e) => handleChange("location.address", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="City"
            value={propertyForm.location.city}
            onChange={(e) => handleChange("location.city", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="State"
            value={propertyForm.location.state}
            onChange={(e) => handleChange("location.state", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={propertyForm.location.zipCode}
            onChange={(e) => handleChange("location.zipCode", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Property Type"
            value={propertyForm.propertyType}
            onChange={(e) => handleChange("propertyType", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Bedrooms"
            value={propertyForm.bedrooms}
            onChange={(e) => handleChange("bedrooms", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Bathrooms"
            value={propertyForm.bathrooms}
            onChange={(e) => handleChange("bathrooms", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Square Footage"
            value={propertyForm.squareFootage}
            onChange={(e) => handleChange("squareFootage", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Amenities (comma-separated)"
            value={propertyForm.amenities}
            onChange={(e) => handleChange("amenities", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Image URL"
            value={propertyForm.images}
            onChange={(e) => handleChange("images", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Agent Name"
            value={propertyForm.agent.name}
            onChange={(e) => handleChange("agent.name", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Agent Phone"
            value={propertyForm.agent.phone}
            onChange={(e) => handleChange("agent.phone", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Agent Email"
            value={propertyForm.agent.email}
            onChange={(e) => handleChange("agent.email", e.target.value)}
            className="input border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Availability"
            value={propertyForm.availability}
            onChange={(e) => handleChange("availability", e.target.value)}
            className="input border p-2 rounded"
          />
          <div className="col-span-2 flex justify-between">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              <Plus className="inline-block mr-2" />
              {editingProperty ? "Update Property" : "Add Property"}
            </button>
            {editingProperty && (
              <button
                onClick={resetForm}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Property Listings Section */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Image</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Agent Email</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map((property) => (
              <tr key={property.id} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img
                    src={property.images}
                    alt={property.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td className="p-3">{property.title}</td>
                <td className="p-3">
                  {property.location.address}, {property.location.city}
                </td>
                <td className="p-3">₹{property.price.toLocaleString()}</td>
                <td className="p-3">{property.agent.email}</td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => handleEdit(property)}
                    className="text-blue-500 hover:text-blue-700 mr-3"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => onDeleteProperty(property.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyListings;
