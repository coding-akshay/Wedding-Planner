import React from 'react';
import { Link } from 'react-router-dom';

import BeautyBackgroundImage from '../../assets/Images/bridal-5416522_1280.jpg';
import Ganga from '../../assets/Images/mehndi-designs-1745048_1280.jpg'
import Vinod from '../../assets/Images/mehndi-4338423_1280.jpg'
import Kerala from '../../assets/Images/indian-4388167_1280.jpg'
import Traditional from '../../assets/Images/indian-wedding-3633796_1280.jpg'
import Navbar from '../../componets/Navbar';



const MehndiArtist = [
  {
    id: 1,
    title: 'Ganga Mehandi Artist',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/mehndi/Ganga-Mehandi-Artist',
    url: Ganga ,
  },
  {
    id: 2,
    title: 'Vinod Mehandi Artist',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/mehndi/Vinod-Mehandi-Artist',
    url: Vinod,
  },
  {
    id: 3,
    title: 'Kerala Mehandi Artist',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/mehndi/Kerala-Mehandi-Artist',
    url: Kerala,
  },
  {
    id: 4,
    title: 'Traditional Mehandi Artist',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/mehndi/Traditional-Mehandi-Artist',
    url: Traditional,
  },

];

function MehndiArtists() {
  return (
    <>
    <Navbar/>
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
            {MehndiArtist.map((artist) => (
              <Link
                key={artist.id}
                to={artist.route || '#'}
                className="border border-gray-200 rounded-lg shadow-lg w-72 overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-300 bg-white"
              >
                <div className="h-48 w-full">
                  <img
                    src={artist.url || '/placeholder.jpg'}
                    alt={artist.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{artist.title}</h3>
                  <p className="text-gray-600 mb-1">{artist.location}</p>
                  <p className="text-gray-600 mb-1">
                    Rating: {Array.from({ length: artist.rating }).map((_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </p>
                  <p className="text-pink-600 font-bold mb-2">₹{artist.price.toLocaleString('en-IN')}</p>
                  <button className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-pink-600">
                    Check Profile
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Found */}
          {MehndiArtist.length === 0 && (
            <div className="text-center text-gray-500 mt-6">
              No beauticians found.
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default MehndiArtists;
