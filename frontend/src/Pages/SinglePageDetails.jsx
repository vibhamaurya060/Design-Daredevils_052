import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/SinglePageDetails.css"; 
import Navbar from "../Components/Navbar";

const SinglePageDetails = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch(
          `https://react-5db3c-default-rtdb.firebaseio.com/properties/${id-1}.json`
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        let data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
    <Navbar/>
    <div className="container1">
      {/* Property Card */}
      <div className="property-card1">
        <img className="property-card-image1" src={data?.images} alt={data?.title} height={500}/>
        <div className="property-info1">
          <h2>{data?.title}</h2>
          <p className="description">{data?.description}</p>

          {/* Property Details */}
          <div className="details1">
            <p><strong>Type:</strong> {data?.propertyType}</p>
            <p><strong>Size:</strong> {data?.squareFootage} sqft</p>
            <p><strong>Bedrooms:</strong> {data?.bedrooms}</p>
            <p><strong>Bathrooms:</strong> {data?.bathrooms}</p>
            <p><strong>Location:</strong> {data?.location.address}, {data?.location.city}</p>
            <p><strong>Available:</strong> {data?.availability}</p>
          </div>

          {/* Amenities */}
          <h3>Amenities:</h3>
          <ul className="amenities1">
            {data?.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>

          {/* Price & Agent Info */}
          <div className="price1">₹{data?.price.toLocaleString()}</div>
          <p className="neighborhood1">{data?.neighborhoodDescription}</p>

          {/* Agent Contact */}
          <div className="agent-info1">
            <h3>Contact Agent</h3>
            <p><strong>{data?.agent.name}</strong></p>
            <p>Email: {data?.agent.email}</p>
            <p>Phone: {data?.agent.phone}</p>
            <button className="contact-button1">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default SinglePageDetails;
