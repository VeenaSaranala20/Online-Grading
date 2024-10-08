import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import Login from './components/Login'; // Import Login component
import Registration from './components/Registration'; // Import Registration component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import AssignmentSubmission from './components/AssignmentSubmission'; // Import Assignment Submission component
import Grades from './components/Grades'; // Import Grades component
import Feedback from './components/Feedback'; // Import Feedback component
import ForgotPassword from './components/ForgotPassword'; // Import Forgot Password component
import Logout from './components/Logout'; // Import Logout component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit-assignment" element={<AssignmentSubmission />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App; // Make sure to export the App component

