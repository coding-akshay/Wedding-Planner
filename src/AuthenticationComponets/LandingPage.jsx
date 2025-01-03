import React, { useState } from 'react';
import Login from './LoginPage';
import SignUp from './signUp';

function FrontePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  // Close Modals
  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  // Switch Between Modals
  const openSignUpFromLogin = () => {
    setIsLoginModalOpen(false); // Close Login modal
    setIsSignUpModalOpen(true); // Open Sign Up modal
  };

  const openLoginFromSignUp = () => {
    setIsSignUpModalOpen(false); // Close Sign Up modal
    setIsLoginModalOpen(true);   // Open Login modal
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{
        backgroundImage: `url('src/assets/Images/Indian Wedding Phere.jpeg')`,
      }}
    >
      <div className="text-pink-900 p-6 rounded-lg">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Wedding Planning Has Never Been Easier
        </h1>
        <p className="text-lg md:text-xl font-bold">
          Wedding Website, Registry, Guest List, Vendor Manager, Checklist, and more!
        </p>
      </div>

      <div className="mt-8 flex flex-col justify-center items-center">
        {/* Login Button */}
        <button
          className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-lg md:text-xl font-semibold text-rose-600 hover:text-white border-2 border-rose-600
            hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:bg-transparent mb-4"
          onClick={() => setIsLoginModalOpen(true)}
        >
          LOGIN
        </button>

        {/* Sign Up Button */}
        <button
          className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-lg md:text-xl font-semibold text-rose-600 hover:text-white border-2 border-rose-600
            hover:bg-rose-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 focus:bg-transparent"
          onClick={() => setIsSignUpModalOpen(true)}
        >
          SIGN UP
        </button>
      </div>

      {/* Modals */}
      {isLoginModalOpen && (
        <Login
          closeModal={closeLoginModal}
          openSignUp={openSignUpFromLogin} // Function to open Sign Up modal from Login
        />
      )}

      {isSignUpModalOpen && (
        <SignUp
          closeModal={closeSignUpModal}
          openLogin={openLoginFromSignUp} // Function to open Login modal from Sign Up
        />
      )}
    </div>
  );
}

export default FrontePage;
