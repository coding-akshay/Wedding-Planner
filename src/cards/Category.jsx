import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleGetStarted = () => {
    if (selectedCategory) {
      navigate(`/service/${selectedCategory.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      alert('Please select a category.');
    }
  };

  return (
    <div className="bg-red-300">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Background Image 1 */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center animate-fadeInOut"
          style={{ backgroundImage: "url('src/assets/Images/bride-6552057.jpg')" }}
        />
        {/* Background Image 2 */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center animate-fadeInOut delay-[8s]"
          style={{ backgroundImage: "url('src/assets/Images/dance-5321562.jpg')" }}
        />
        {/* Overlay */}
        <div className="bg-black h-full bg-opacity-50 flex flex-col justify-center items-center text-white px-4 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
            Plan Your Dream Weddings
          </h1>
          <p className="text-base sm:text-lg mb-6 text-center">
            Search over 50,000+ local professionals with reviews, pricing, availability, and more
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="text"
              placeholder="City"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-black w-full sm:w-52"
            />
            <select
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-black w-full sm:w-52"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Category</option>
              <option value="Venues">Venues</option>
              <option value="Photographers">Photographers</option>
              <option value="Pre Wedding Shoot">Pre Wedding Shoot</option>
              <option value="Beauty">Beauty</option>
              <option value="Mehndi">Mehndi</option>
              <option value="Jewellery & Accessories">Jewellery & Accessories</option>
              <option value="Music & Dance">Music & Dance</option>
              <option value="Food">Food</option>
            </select>
            <button
              onClick={handleGetStarted}
              className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 w-full sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-100 py-12 px-4 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-red-500 mb-4">
          Wedding Planning Has Never Been So Easier
        </h2>
        <p className="text-gray-600 mb-8">
          Sign up for Shaadi Baraati to get access to your all-in-one Wedding Planner
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-4">
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Checklist</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Wedding Websites</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Guest List</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Wedding Budget</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Vendor Manager</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Registry</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">Wedding Vision</div>
          <div className="bg-white p-4 rounded-md shadow-md text-sm sm:text-base">E-Invite</div>
        </div>
      </div>
    </div>
  );
}

export default Category;
