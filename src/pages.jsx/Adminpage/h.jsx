import React, { useState } from "react";

function AdminHome() {
  const [gallery, setGallery] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setGallery((prevGallery) => [...prevGallery, ...fileURLs]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white p-4 shadow-lg">
        <ul className="space-y-4">
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Request Calendar
          </li>
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Information
          </li>
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Projects
          </li>
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Membership Plans
          </li>
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Reviews
          </li>
          <li className="font-semibold text-gray-700 hover:text-blue-500 cursor-pointer">
            Google My Business
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Portfolio Box */}
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-gray-700">Portfolio</h2>
            <p className="text-sm text-gray-500">Upload images to your gallery</p>
          </div>

          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded file:border-0
                      file:text-sm file:font-semibold
                      file:bg-blue-50 file:text-blue-700
                      hover:file:bg-blue-100
                      mb-4"
          />

          {/* Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div key={index} className="w-full h-24 bg-gray-100 rounded overflow-hidden">
                <img src={image} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
