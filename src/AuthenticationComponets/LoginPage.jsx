import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function Login({ closeModal, openSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const navigate = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded correct credentials for validation
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      console.log('Login Successful:', { email, password });
      setError(''); 
      closeModal(); 
      navigate('/home'); 
    } else {
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden h-full lg:h-auto">
        
        {/* Left Section */}
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url("src/assets/Images/Indian Wedding Phere.jpeg")',
          }}
        >
          <div className="text-rose-600 p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Welcome Back to Your Wedding Planner!
            </h2>
            <p className="text-black font-bold">
              Sign in to access your personalized wedding planning experience.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 relative h-full">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

          {/* Display error message */}
          {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-start" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2 text-start" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex justify-between items-center">
          <Link to="/home">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </Link>
            <button
              type="button"
              onClick={closeModal}
              className="text-red-600 hover:text-red-800"
            >
              Close
            </button>
          </div>
          </form>

          <div className="mt-4 text-center">
            <p>
              Don't have an account?{' '}
              <button onClick={openSignUp} className="text-red-500 hover:text-red-900">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
