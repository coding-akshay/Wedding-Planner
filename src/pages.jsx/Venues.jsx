import React from 'react';

function Venues() {
  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold">Venues</h1>
      <p className="text-lg text-gray-700 my-4">Explore amazing banquet halls, marriage gardens, and more!</p>
      <img
        src="src/images/Indian Wedding Phere.jpeg"
        alt="Venues"
        className="h-60 w-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}

export default Venues;
