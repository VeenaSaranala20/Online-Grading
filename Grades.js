import React from 'react';

const Grades = () => {
  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Full screen background
        padding: '20px' 
      }}
    >
      <div className="container" style={{ maxWidth: '400px' }}>
        <h2 className="text-center">Your Grades</h2>
        <ul className="list-group">
          <li className="list-group-item">Assignment 1: A</li>
          <li className="list-group-item">Assignment 2: A+</li>
          <li className="list-group-item">Assignment 3: B</li>
          <li className="list-group-item">Assignment 3: B+</li>
          <li className="list-group-item">Assignment 3: C</li>
          <li className="list-group-item">Assignment 3: C+</li>
        </ul>
      </div>
    </div>
  );
};

export default Grades;
