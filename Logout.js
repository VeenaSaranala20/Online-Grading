import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage or authentication data here
    alert('You have been logged out!');
    navigate('/');
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{  
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Ensures full screen background
        padding: '20px' 
      }}
    >
      <div className="text-center">
        <h2>Are you sure you want to logout?</h2>
        <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
