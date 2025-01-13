import React from 'react';
import { Link } from 'react-router-dom';
import AnilKumar from '../../assets/Images/pexels-pavel-danilyuk-7518735.jpg';
import Shahala from '../../assets/Images/pexels-sahar-photography-914616632-29151177.jpg';
import BeautyBackgroundImage from '../../assets/Images/pexels-jhong-pascua-1062908-3018845.jpg'; 

const beautician = [
  {
    id: 1,
    title: 'Anil Kumar',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/beauty/Anil-Kumar',
    url: AnilKumar,
  },        
  {
    id: 2,
    title: 'Shahala',
    location: 'Kerala',
    rating: 1,
    price: 10000,
    route: '/beauty/shahala',
    url: Shahala,
  },
  {
    id: 3,
    title: 'Makeup by Chithra',
    location: 'Delhi',
    rating: 2,
    price: 18000,
    route: '/beauty/Makeup-by-chithra',
    url: AnilKumar,
  },
  {
    id: 4,
    title: 'Bride Factory Bangalore',
    location: 'Kerala',
    rating: 1,
    price: 20000,
    route: '/beauty/Bridefactory-bangalour',
    url: Shahala,
  },
  {
    id: 5,
    title: 'Shruthi',
    location: 'Delhi',
    rating: 2,
    price: 2000,
    route: '/beauty/Shruthi',
    url: AnilKumar,
  },
  {
    id: 6,
    title: 'Fashion Beauty',
    location: 'Kerala',
    rating: 1,
    price: 5000,
    route: '/beauty/fashion-beauty',
    url: Shahala,
  },
];

function Beauty() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BeautyBackgroundImage})`,
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="p-6">
          {/* Beautician List */}
          <div className="flex flex-wrap gap-6">
            {beautician.map((beautician) => (
              <Link
                key={beautician.id}
                to={beautician.route || '#'}
                className="border border-gray-200 rounded-lg shadow-lg w-72 overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-300 bg-white"
              >
                <div className="h-48 w-full">
                  <img
                    src={beautician.url || '/placeholder.jpg'}
                    alt={beautician.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{beautician.title}</h3>
                  <p className="text-gray-600 mb-1">{beautician.location}</p>
                  <p className="text-gray-600 mb-1">
                    Rating: {Array.from({ length: beautician.rating }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </p>
                  <p className="text-pink-600 font-bold mb-2">₹{beautician.price.toLocaleString('en-IN')}</p>
                  <button className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-pink-600">
                    Check Profile
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Found */}
          {beautician.length === 0 && (
            <div className="text-center text-gray-500 mt-6">
              No beauticians found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Beauty;
