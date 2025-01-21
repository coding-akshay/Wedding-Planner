import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/Images/business-5475661_1280.jpg"; // Import for background image
import manageGrowthImage from "../../assets/Images/gen_access-menu_en-IN.png"; // Import for manage growth image
import Navbar from "../../componets/Navbar";

function Vendor() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError(""); // Clear error on input change
  };

  const handleLogin = () => {
    const { username, password } = formData;

    // Validate username and password
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username);
    const isPhoneNumber = /^\d{10}$/.test(username);

    if ((isEmail || isPhoneNumber) && password.trim()) {
      navigate("/Adminhomepages"); // Navigate to AdminHomePage if valid
    } else {
      setError("Please enter a valid email/phone number and password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div
          className="bg-cover bg-center h-96 flex items-center justify-center text-white"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Grow your business with WeddingPlanner
            </h1>
            <ul className="list-none space-y-2 text-lg">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Showcase your services on our industry-leading site!
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Reach local engaged couples and book more weddings.
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Trusted by over 76,000 professionals.
              </li>
            </ul>
            <button className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded shadow">
              Sign Up
            </button>
          </div>
        </div>

        {/* Login Section */}
        <div className="bg-gray-100 py-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Showcase your business
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Be visible to couples on top search engines with your custom,
                  mobile-friendly WeddingWire Storefront.
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Reach more engaged couples and receive lead details
                  immediately to your email and phone.
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Track performance and get expert advice to help you make the
                  most of your listing.
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Business Login</h2>
              {error && (
                <div className="text-red-600 text-sm mb-4">{error}</div>
              )}
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Username (Email/Phone)
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Enter your email or phone number"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-pink-300"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="w-full py-3 bg-pink-600 text-white font-semibold rounded hover:bg-pink-700"
                >
                  Log In
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Forgot your username/password?
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Growth Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={manageGrowthImage}
                alt="Manage Growth"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Manage your business and track your growth
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Customize your WeddingWire Storefront by adding a business
                  description, photos, service details, and more.
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Get notified instantly about new leads and messages by email
                  and phone so you can respond quickly.
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-4 text-pink-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Quickly request reviews from couples and monitor your
                  analytics.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black py-12 px-6 md:px-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">
            Contact a Wedding Expert for Free
          </h2>
          <p className="text-gray-500 mb-4">
            We'll be here to help you 7 days a week from 9 am to 8 pm.
          </p>
          <p className="text-gray-500">
            Call <span className="font-bold">+91 999 523 7684</span>
          </p>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-200">
              Get the WeddingWire app
            </h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-800">
                App Store
              </a>
              <a href="#" className="text-green-800">
                Google Play
              </a>
            </div>
          </div>

          <footer className="mt-8">
            <div className="text-gray-600">
              <p>&copy; {new Date().getFullYear()} WeddingWire</p>
              <p>
                Information | Contact us | Terms & privacy | Your Privacy
                Choices | Register your business | About us
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="mr-8">Follow us on:</div>
              <div className="flex gap-2 mr-32">
                <span className="text-blue-500">Facebook</span>
                <span className="text-blue-800">Twitter</span>
                <span className="text-pink-600">Instagram</span>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              <p>Choose a country: India</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Vendor;
