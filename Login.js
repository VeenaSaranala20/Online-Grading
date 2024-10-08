import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    navigate('/dashboard');
  };

  return (
    <div 
      className="d-flex align-items-center justify-content-center" 
      style={{ 
        backgroundColor: '#34ebde', 
        minHeight: '100vh', // Ensures the background covers full viewport height
        padding: '20px'
      }}
    >
      <div className="container" style={{ maxWidth: '400px' }}>
        <h2 className="text-center">Login</h2>
        <form onSubmit={handleLogin} className="border p-4 rounded shadow">
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
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className="mt-3 text-center">Don't have an account? <a href="/register">Register</a></p>
          <p className="text-center"><a href="/forgot-password">Forgot Password?</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

