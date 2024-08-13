import React, { useState } from 'react';
import './UserPage.css'; // Custom CSS for additional styling if needed

const UserPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">
                {isSignUp ? 'Sign Up' : 'Log In'}
              </h3>
              <form>
                {isSignUp && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                      <input type="password" className="form-control" id="confirmPassword" required />
                    </div>
                  </>
                )}
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  {isSignUp ? 'Sign Up' : 'Log In'}
                </button>
              </form>
              <div className="text-center mt-3">
                <button className="btn btn-link" onClick={toggleForm}>
                  {isSignUp ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
