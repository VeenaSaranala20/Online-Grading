import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    alert('Reset link sent to your email!');
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Full-screen background
        padding: '20px' 
      }}
    >
      <div className="container" style={{ maxWidth: '500px' }}>
        <h2 className="text-center">Forgot Password</h2>
        <form onSubmit={handleReset} className="border p-4 rounded shadow">
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

