import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link } from 'react-router-dom';
function Login({ closeModal, openSignUp }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to handle login errors

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded correct credentials for validation
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    if (email === validEmail && password === validPassword) {
      console.log('Login Successful:', { email, password });
      setError(''); // Clear any previous error
      closeModal(); // Close the modal
      navigate('/homepage'); // Navigate to homepage
    } else {
      setError('Invalid email or password. Please try again.'); // Display error message
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
      {/* Background Image */}
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: 'url("src/images/Indian Wedding Phere.jpeg")' }}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white p-6 rounded-md w-full max-w-sm md:max-w-md lg:max-w-lg z-10 mx-4 shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

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
          <Link to="/homepage">
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
  );
}

export default Login;
