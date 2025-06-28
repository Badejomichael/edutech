import '../auth.css';
import { useState } from 'react';



const AuthForm = ({ isSignup }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup && fullName.trim() === '') {
      setError('Full name is required');
      return;
    }
    if (email.trim() === '') {
      setError('Email is required');
      return;
    }
    if (password.trim().length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    alert(isSignup ? 'Signup successful!' : 'Login successful!');
    // Replace alert with real API logic or navigation later
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-light formmm">
      <div className="card p-4 shadow-lg form-cardd " style={{ maxWidth: '400px', width: '100%', background: 'rgba(15,23,42,0.95)', border: '1px solid #3B82F6' }}>
        <h2 className="text-center hero-form-text mb-4">EDUTECH 🎓</h2>
        <h2 className="text-center hero-form-text mb-4">{isSignup ? 'Create Account' : 'Welcome Back'}</h2>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

           {!isSignup && (<div className="sub-login-txt">
            <label className="form-label">
              <input type="checkbox" /> Keep me logged in
            </label>

            <a href="/" className="ms-1 text-info forgot-password">
              {isSignup ? '' : 'Forgot Password ?'}
            </a>
          </div>)}

          <button type="submit" className="btn btn-primary w-100">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-3 footer-formm">
          <small>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
            <a href={isSignup ? '/' : '/signup'} className="ms-1 text-info">
              {isSignup ? 'Login' : 'Sign Up'}
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
