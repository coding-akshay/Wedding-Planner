import React from 'react';

function Einvite() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {/* Heading and content at the top */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Welcome to Einvite</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
      </div>

      {/* Top side box content */}
      <div className="flex justify-center mb-4">
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4 h-20 flex justify-center items-center mr-4">
          <p className="text-lg font-bold">Mehndi</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4 h-20 flex justify-center items-center mr-4">
          <p className="text-lg font-bold">Wedding</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4 h-20 flex justify-center items-center mr-4">
          <p className="text-lg font-bold">Reception</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/4 h-20 flex justify-center items-center">
          <p className="text-lg font-bold">Engagement</p>
        </div>
      </div>

      {/* Placeholder image */}
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 h-64 flex justify-center items-center">
        <img src="" alt="Placeholder image" className="w-full h-full object-cover" />
      </div>

      {/* Eye button at the bottom */}
      <button className="bg-gray-100 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded mt-4">
        
      👁️
      </button>
    </div>
  );
}

export default Einvite;