import React from 'react';
import { Link } from 'react-router-dom';
// import photographerss from  '';

const photographers = [
  {
    id: 1,
    title: 'Wedding Tasveer',
    location: 'Kirti Nagar, Delhi NCR',
    price: '₹50,000 On Demand',
    // Url: photographerss,
    route: '/photographer/WeddingTasveer',
  },
  {
    id: 2,
    title: 'Happy Stillz',
    location: 'Delhi NCR',
    price: '₹40,000 Onwards',
    // Url: photographerss,
    route: '/photographer/HappyStillz',
  },
  {
    id: 3,
    title: 'Multi Production Clickers',
    location: 'Dwarka, Delhi NCR',
    price: '₹20,000 Onwards',
    // Url: photographerss,
    route: '/photographer/Multi-Production-Clickers',
  },
  {
    id: 4,
    title: 'Wedding Click',
    location: 'Kirti Nagar, Delhi NCR',
    price: '₹50,000 On Demand',
    // Url: photographerss,
    route: '/photographer/Wedding-Click',
  },
  {
    id: 5,
    title: 'Happy Moment',
    location: 'Delhi NCR',
    price: '₹10,000 Onwards',
    // Url: photographerss,
    route: '/photographer/Happy-Moment',
  },
  {
    id: 6,
    title: 'Wedding Studio',
    location: 'Dwarka, Delhi NCR',
    price: '₹70,000 Onwards',
    // Url: photographerss,
    route: '/photographer/Wedding-Studio',
  },
  {
    id: 7,
    title: 'Avarnya Studio',
    location: 'Kirti Nagar, Delhi NCR',
    price: '₹60,000 On Demand',
    // Url: photographerss,
    route: '/photographer/Avarnya-Studio',
  },
  {
    id: 8,
    title: 'Happy Faces',
    location: 'Delhi NCR',
    price: '₹35,000 Onwards',
    // Url: photographerss,
    route: '/photographer/Happy-Faces',
  },
  {
    id: 9,
    title: 'Top Clicks',
    location: 'Dwarka, Delhi NCR',
    price: '₹55,000 Onwards',
    // Url: photographerss,
    route: '/photographer/Top-Clicks',
  },
];

function Photographers() {
  return (
    <div className="flex flex-wrap gap-6 p-6">
      {photographers.map((photographer) => (
        <Link
          key={photographer.id}
          to={photographer.route || '#'}
          className="border border-gray-200 rounded-lg shadow-lg w-72 overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div>
            <img
              src={photographer.Url}
              alt={photographer.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{photographer.title}</h3>
            <p className="text-gray-600 mb-1">{photographer.location}</p>
            <p className="text-red-500 font-bold mb-2">{photographer.price}</p>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded w-full hover:bg-red-600"
            >
              Book Now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Photographers;
