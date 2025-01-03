import React, { useState } from 'react';

function SignUp({ closeModal, openLogin }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Sign Up Data', { firstName, lastName, email, phone, otp, password });
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Section */}
        <div
          className="hidden lg:flex lg:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url("src/assets/Images/Indian Wedding Phere.jpeg")',
          }}
        >
          <div className=" text-rose-600 p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Welcome Back to Your Wedding Planner!
            </h2>
            <p className="text-black font-bold">
              Sign up to access your personalized wedding planning experience.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-8 relative">
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="p-3 border rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="p-3 border rounded-md"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 border rounded-md"
              required
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-3 border rounded-md"
              required
            />

            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="p-3 border rounded-md"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded-md"
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="p-3 border rounded-md"
              required
            />
            
            {/* Sign Up Button at the Bottom */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* "Already have an account?" Login Link */}
          <div className="mt-4 text-center">
            <p>
              Already have an account?{' '}
              <button
                onClick={openLogin} // Trigger Login modal
                className="text-red-500 hover:text-red-900 font-semibold"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
