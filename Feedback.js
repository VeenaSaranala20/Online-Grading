import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [submissions, setSubmissions] = useState([
    { id: 1, title: 'Assignment 1', feedback: '' },
    { id: 2, title: 'Assignment 2', feedback: '' },
  ]);

  const handleFeedbackSubmit = (id) => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, feedback } : submission
    );
    setSubmissions(updatedSubmissions);
    alert('Feedback submitted!');
    setFeedback('');
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
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 className="text-center">Provide Feedback</h2>
        <ul className="list-group">
          {submissions.map(submission => (
            <li key={submission.id} className="list-group-item">
              <h5>{submission.title}</h5>
              <textarea
                className="form-control"
                placeholder="Provide feedback here"
                value={submission.feedback || feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows="3"
              />
              <button
                className="btn btn-primary mt-2"
                onClick={() => handleFeedbackSubmit(submission.id)}
              >
                Submit Feedback
              </button>
              {submission.feedback && (
                <p className="mt-2">
                  <strong>Previous Feedback:</strong> {submission.feedback}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
