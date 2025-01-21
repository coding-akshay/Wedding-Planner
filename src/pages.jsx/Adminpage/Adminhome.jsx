import React, { useState } from "react";
import Information from "./Information";
import Services from "../Services";
import Portfolio from "./Portfolio";

function AdminHome() {
  const [gallery, setGallery] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Portfolio");

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setGallery((prevGallery) => [...prevGallery, ...fileURLs]);
  };

  const GalleryComponent = () => (
    <div className="bg-pink-200 p-4 rounded shadow-lg">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-700">Gallery</h2>
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

      <div className="grid grid-cols-3 gap-4">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="w-full h-24 bg-gray-100 rounded overflow-hidden"
          >
            <img
              src={image}
              alt={`Uploaded ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-300">
      <div className="w-1/6 bg-black p-4 shadow-lg">
        <ul className="space-y-4">
          {[
            "Request Calendar",
            "Information",
            "Projects",
            "Membership Plans",
            "Reviews",
            "Google My Business",
          ].map((menu) => (
            <li
              key={menu}
              onClick={() => setActiveMenu(menu)}
              className={`font-semibold text-gray-200 hover:text-blue-600 cursor-pointer ${
                activeMenu === menu ? "text-blue-500" : ""
              }`}
            >
              {menu}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-6">
        {["Request Calendar", "Projects"].includes(activeMenu) && (
          <GalleryComponent />
        )}
        {activeMenu === "Portfolio" && <Portfolio />}
        {activeMenu === "Information" && <Information />}
        {activeMenu === "Membership Plans" && <Services />}
        {activeMenu === "Reviews" && <Information />}
        {activeMenu === "Google My Business" && <Information />}
      </div>
    </div>
  );
}

export default AdminHome;
