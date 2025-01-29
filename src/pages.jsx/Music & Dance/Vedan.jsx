import React, { useState } from 'react';
import Djs from '../../assets/Images/vedan1.jpg';
import image2 from '../../assets/Images/vedan2.jpg';
import image3 from '../../assets/Images/vedan2.jpg';
import image4 from '../../assets/Images/vedan2.jpg';
import image5 from '../../assets/Images/vedan1.jpg';
import Navbar from '../../componets/Navbar';
// import Checkbox from '../../assets/Images/icons8-checkbox-24.png';

    function Vedan() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [viewAll, setViewAll] = useState(false);

  const images = [
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage('');
    setViewAll(false);
  };

  const openViewAllModal = () => {
    setViewAll(true);
    setShowModal(true);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      {/* Venue Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <img
          src={Djs}
          alt="The Royal Mahal"
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Vedan</h1>
            <p className="text-gray-600">Delhi</p>
            <p className="text-yellow-500 font-semibold mt-1">4.0 ⭐ (No Reviews)</p>
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">₹50000</p>
            <p className="text-gray-600">Per Day</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              REQUEST PRICING
            </button>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Albums (5)</h2>
          <button
            onClick={openViewAllModal}
            className="text-pink-500 font-semibold hover:underline"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Album ${index + 1}`}
              className="rounded-lg w-full h-32 object-cover cursor-pointer hover:opacity-75"
              onClick={() => openModal(image.url)}
            />
          ))}
        </div>
      </div>

      
  

    
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-black font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
            {viewAll ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Full View ${index + 1}`}
                    className="rounded-lg w-full h-32 object-cover cursor-pointer hover:opacity-75"
                    onClick={() => setCurrentImage(image.url)}
                  />
                ))}
              </div>
            ) : (
              <img
                src={currentImage}
                alt="Current"
                className="rounded-lg w-full h-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default Vedan;
