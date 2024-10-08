import React from 'react';

const Dashboard = () => {
  const logo = "/logo.jpeg"; // Path relative to the public folder

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh',  // Ensure the background covers full viewport height
        padding: '20px' 
      }}
    >
      <div className="container">
        <h2 className="text-center">Dashboard</h2>
        <div className="text-center">
          <img
            src={logo}
            alt="Logo"
            className="img-fluid mx-auto d-block mb-4"
            style={{ maxWidth: '150px', height: 'auto' }} // Optional styling
          />
        </div>
        <p className="text-center">Welcome to the Assignment Submission System!</p>
        <div className="text-center">
          <a href="/submit-assignment" className="btn btn-success mx-2">Submit Assignment</a>
          <a href="/grades" className="btn btn-info mx-2">View Grades</a>
          <a href="/feedback" className="btn btn-warning mx-2">Provide Feedback</a>
          <a href="/logout" className="btn btn-danger mx-2">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
