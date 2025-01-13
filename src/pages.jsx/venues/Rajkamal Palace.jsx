import React, { useState } from 'react';
import SSRConvention from '../../assets/Images/events-2609526.jpg';
import image1 from '../../assets/Images/events-2609526.jpg';
import image2 from '../../assets/Images/events-2609526.jpg';
import image3 from '../../assets/Images/events-2609526.jpg';
import image4 from '../../assets/Images/events-2609526.jpg';
import image5 from '../../assets/Images/events-2609526.jpg';
import Checkbox from '../../assets/Images/icons8-checkbox-24.png';

    function RajkamalPalace() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [viewAll, setViewAll] = useState(false);

  const images = [
    { url: image1 },
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
    <div className="container mx-auto p-4">
      {/* Venue Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <img
          src={SSRConvention}
          alt="The Royal Mahal"
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold"> RajkamalPalace </h1>
            <p className="text-gray-600">Kompally, Hyderabad</p>
            <p className="text-yellow-500 font-semibold mt-1">4.0 ⭐ (No Reviews)</p>
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">₹1000</p>
            <p className="text-gray-600">Per Day</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              REQUEST PRICING
            </button>
          </div>
        </div>
      </div>

      {/* Albums Section */}
      <div className="bg-white shadow rounded-lg p-6">
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

      
      {/* Event Areas */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">2 Event Areas Available</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">The Royal Mahal Banquet Hall</h3>
            <p>Indoor - 600 Seats | 900 Floating</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h3 className="font-semibold">Royal Galaxy Mahal Banquet Hall</h3>
            <p>Indoor - 300 Seats | 500 Floating</p>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Services Offered</h2>
        <ul className="list-disc list-inside">
          <li>Rental Price Per Day: ₹1,500</li>
          <li>Rental Price Per Day: ₹9,000</li>
        </ul>
      </div>
       {/* Amenities*/}
       <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Amenities</h2>
         <ul className="list-none mt-2">
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       10 Rooms available
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       10 AC Rooms
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       10000 Square Feet Capacity
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       200 Parking
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       Electricity Back-up
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       Bridal Room
                     </li>
                   </ul>
      </div>
    {/* Policies */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Policies</h2>
         <ul className="list-none mt-2">
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       75% payment on date
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       25% payment on booking
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       cancellation policy - No refund if cancelled before three months
                     </li>
                   </ul>
      </div>
      {/* Other Information */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h2 className="text-xl font-bold mb-4">Other Information</h2>
         <ul className="list-none mt-2">
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       property type - Kalyana Mandapam, Mini hall, Convention hall, Wedding venue, Banquet Hall, Fort and Palace
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       price type - Time Based Rent
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       decoration - Outside Decorators allowed
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       food - Outside food allowed
                     </li>
                     <li className="flex items-center">
                       <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                       allowed cuisine - Both
                     </li>
                   </ul>
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
  );
}
export default RajkamalPalace
