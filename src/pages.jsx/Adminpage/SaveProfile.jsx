import React from "react";
import AdminNavbar from "./AdminNavbar";

function SaveProfile() {
  return (
    <>
      <AdminNavbar/>
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
         
          {/* Image */}
          <img
            src="https://via.placeholder.com/400x250"
            alt="img"
            className="w-full h-48 object-cover"
          />

          {/* Content */}
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
name            </h3>
            <p className="text-gray-600 text-sm">location</p>
            <div className="mt-4">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">From:</span> 
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-semibold">Capacity:</span> 
              </p>
              <p className="text-green-600 text-sm font-medium">
                -10% promotion
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <button className="w-full bg-red-600 text-white text-sm font-semibold py-2 px-4 rounded-lg hover:bg-red-700">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SaveProfile;
