import React, { useState } from 'react';

const AssignmentSubmission = () => {
  const [assignment, setAssignment] = useState(null);

  const handleSubmission = (e) => {
    e.preventDefault();
    alert('Assignment submitted!');
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Ensures full screen height background
        padding: '20px'
      }}
    >
      <div className="container" style={{ maxWidth: '400px' }}>
        <h2 className="text-center">Submit Assignment</h2>
        <form onSubmit={handleSubmission} className="border p-4 rounded shadow">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={(e) => setAssignment(e.target.files[0])}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssignmentSubmission;
