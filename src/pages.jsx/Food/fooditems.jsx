import React from 'react';
import { Link } from 'react-router-dom'; 
import food from '../../assets/Images/dance-5321562.jpg';
import FoodBackgroundImage from '../../assets/Images/couple-7065652.jpg';

const foodlist = [
  {
    id: 1,
    title: 'Veg And Snaks',
    location: 'Delhi',
    rating: 5,
    price: 15000,
    route: '/food/Veg-And-Snaks',
    url:food,
  },
  {
    id: 2,
    title: 'Non-veg',
    location: 'Delhi',
    rating: 4,
    price: 18000,
    route: '/food/Non-veg',
    url:food,
  },
  {
    id: 3,
    title: 'Biriyani',
    location: 'Delhi',
    rating: 4,
    price: 20000,
    route: '/food/Biriyani',
    url:food,

  },
  {
    id: 4,
    title: 'Meels',
    location: 'Delhi',
    rating: 5,
    price: 25000,
    route: '/food/Meels',
    url:food,
  },
];
function Fooditems() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${FoodBackgroundImage })`,
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen">
        <div className="p-6">
          {/* Beautician List */}
          <div className="flex flex-wrap gap-6 justify-center">
            {foodlist.map((artist) => (
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
          {foodlist.length === 0 && (
            <div className="text-center text-gray-500 mt-6">
              No beauticians found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export default Fooditems
