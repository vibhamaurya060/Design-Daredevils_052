import React from 'react';
import { useNavigate ,Link} from 'react-router';
import '../styles/PageNotFound.css';

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <div className="emoji">🤔</div>
        
        <h2 className="title">Page Not Found</h2>
        
        <p className="message">
          Oops! The page you're looking for seems to have gone on vacation. 
          Let's get you back to somewhere familiar.
        </p>
        
        <div className="button-group">
          <button 
            onClick={() => {
           
              navigate(-1)
            
            }} 
            className="back-button"
          >
            Go Back
          </button>
          
          <button
            onClick={() => navigate('/')} 
            className="home-button"
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;