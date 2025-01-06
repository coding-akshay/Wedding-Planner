import React from 'react';

function Review() {
  return (
    <div className="font-sans">
      {/* "How It Works" Section */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-semibold mb-2 text-pink-500">How It Works</h2>
        <p className="text-gray-700">Book the Best Verified Vendors according to your requirement in 3 Simple Steps.</p>
        
        {/* Steps */}
        <div className="flex justify-center gap-8 mt-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="search-icon-placeholder.png" alt="Search Icon" />
            </div>
            <h3 className="text-pink-500 font-medium">SEARCH</h3>
            <p className="text-sm text-gray-600">Get Quotations, Compare, And Book The Best Vendor For Your Wedding.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="select-icon-placeholder.png" alt="Select Icon" />
            </div>
            <h3 className="text-pink-500 font-medium">SELECT</h3>
            <p className="text-sm text-gray-600">Select The Preferred Vendors And Send Your Requirements To Them.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img src="book-icon-placeholder.png" alt="Book Icon" />
            </div>
            <h3 className="text-pink-500 font-medium">BOOK</h3>
            <p className="text-sm text-gray-600">Get Quotations, Compare, And Book The Best Vendor For Your Wedding.</p>
          </div>
        </div>
      </div>

      {/* Red Angled Section */}
      <div className="relative bg-pink-600 text-white py-12">
        <div className="absolute top-0 left-0 w-full h-10 bg-white skew-y-3 origin-top"></div>
        <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto text-center">
          <div>
            <div className="mb-4">
              <i className="fas fa-list text-2xl"></i>
            </div>
            <p>Checklist</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-globe text-2xl"></i>
            </div>
            <p>Wedding Websites</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-users text-2xl"></i>
            </div>
            <p>Guest List</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-money-check text-2xl"></i>
            </div>
            <p>Wedding Budget</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-box text-2xl"></i>
            </div>
            <p>Registry</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-heart text-2xl"></i>
            </div>
            <p>Wedding Vision</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
            <p>E-Invite</p>
          </div>
          <div>
            <div className="mb-4">
              <i className="fas fa-briefcase text-2xl"></i>
            </div>
            <p>Vendor Manager</p> 
          </div>
        </div>
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold">Your One-Stop Shop for Wedding Planning - Wedz Assistance</h3>
          <p className="text-sm mt-2">Plan your dream wedding with the help of our wedding planning experts</p>
          {/* <button className="mt-4 px-6 py-2 bg-white text-red-600 font-medium rounded">Start Planning</button> */}
        </div>
      </div>
    </div>
  );
}

export default Review;
