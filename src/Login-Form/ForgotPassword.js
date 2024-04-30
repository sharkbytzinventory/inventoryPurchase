import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle password reset request goes here
    console.log("Request password reset for", email);
    setSubmitted(true);
  };

  return (
      <div className='login'>
      <Header/>
    <form onSubmit={handleSubmit} className="form">
      <h2>Forgot Password</h2>
      {!submitted ? (
        <>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </>
      ) : (
        <p>If an account with that .<Link to="/login">email</Link> exists, a reset link has been sent</p>
      )}
    </form>
    </div>
  );
}

export default ForgotPassword;




