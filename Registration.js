import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    navigate('/dashboard');
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Full screen background
        padding: '20px' 
      }}
    >
      <div className="container" style={{ maxWidth: '500px' }}>
        <h2 className="text-center">Register</h2>
        <form onSubmit={handleRegister} className="border p-4 rounded shadow">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Register</button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/">Login</a>
          </p>
          <p className="text-center">
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;

