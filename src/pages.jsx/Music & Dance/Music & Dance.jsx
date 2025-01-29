import React from 'react';
import { Link } from 'react-router-dom'; 

import DJ from '../../assets/Images/dance-5321562.jpg';
import BeautyBackgroundImage from '../../assets/Images/couple-7065652.jpg';
import Navbar from '../../componets/Navbar';

const DjArtist = [
  {
    id: 1,
    title: 'Vedan ',
    location: 'Delhi',
    rating: 2,
    price: 15000,
    route: '/music/Vedan',
    url:DJ,
  },
  {
    id: 2,
    title: 'Martin Garrix',
    location: 'Delhi',
    rating: 3,
    price: 18000,
    route: '/music/Martin-Garrix',
    url:DJ,
  },
  {
    id: 3,
    title: 'Fejo (rapper)',
    location: 'Delhi',
    rating: 4,
    price: 20000,
    route: '/music/Fejo-rapper',
    url:DJ,
  },
  {
    id: 4,
    title: 'Mari Ferrari',
    location: 'Delhi',
    rating: 5,
    price: 25000,
    route: '/music/Mari-Ferrari',
    url:DJ,
  },
];
function MusicDance() {
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
          <div className="flex flex-wrap gap-6 justify-center">
            {DjArtist.map((artist) => (
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
                    Rating: {'⭐'.repeat(artist.rating)}
                  </p>
                  <p className="text-pink-600 font-bold mb-2">
                    ₹{artist.price.toLocaleString('en-IN')}
                  </p>
                  <button className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-pink-600">
                    Check Profile
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results Found */}
          {DjArtist.length === 0 && (
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

export default MusicDance;
