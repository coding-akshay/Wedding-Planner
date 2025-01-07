import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const photographers = [
  {
    id: 1,
    title: 'Wedding Tasveer',
    location: ' Delhi',
    price: 50000,
    route: '/photographer/WeddingTasveer',
  },
  {
    id: 2,
    title: 'Happy Stillz',
    location: 'Delhi',
    price: 40000,
    route: '/photographer/HappyStillz',
  },
  {
    id: 3,
    title: 'Multi Production Clickers',
    location: 'kerala',
    price: 20000,
    route: '/photographer/Multi-Production-Clickers',
  },
  {
    id: 4,
    title: 'Wedding Click',
    location: 'bangalur',
    price: 50000,
    route: '/photographer/Wedding-Click',
  },
  {
    id: 5,
    title: 'Happy Moment',
    location: 'Mumbhai',
    price: 10000,
    route: '/photographer/Happy-Moment',
  },
  {
    id: 6,
    title: 'Wedding Studio',
    location: 'kolkatha',
    price: 70000,
    route: '/photographer/Wedding-Studio',
  },
  {
    id: 7,
    title: 'Avarnya Studio',
    location: 'panjab',
    price: 60000,
    route: '/photographer/Avarnya-Studio',
  },
  {
    id: 8,
    title: 'Happy Faces',
    location: 'kerala',
    price: 35000,
    route: '/photographer/Happy-Faces',
  },
  {
    id: 9,
    title: 'Top Clicks',
    location: 'thamilnadu',
    price: 55000,
    route: '/photographer/Top-Clicks',
  },
];

function Photographers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPhotographers, setFilteredPhotographers] = useState(photographers);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = photographers.filter(
      (photographer) =>
        photographer.location.toLowerCase().includes(term) ||
        photographer.price.toString().includes(term)
    );

    setFilteredPhotographers(filtered);
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by location or amount..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 rounded w-full max-w-md outline-none"
        />
      </div>

      {/* Photographers List */}
      <div className="flex flex-wrap gap-6">
        {filteredPhotographers.map((photographer) => (
          <Link
            key={photographer.id}
            to={photographer.route || '#'}
            className="border border-gray-200 rounded-lg shadow-lg w-72 overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 duration-300"
          >
            <div>
              <img
                src={photographer.Url || '/placeholder.jpg'}
                alt={photographer.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{photographer.title}</h3>
              <p className="text-gray-600 mb-1">{photographer.location}</p>
              <p className="text-pink-600 font-bold mb-2">₹{photographer.price.toLocaleString('en-IN')}</p>
              <button
                className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-pink-600"
              >
                Book Now
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Found */}
      {filteredPhotographers.length === 0 && (
        <div className="text-center text-gray-500 mt-6">
          No photographers found matching your search.
        </div>
      )}
    </div>
  );
}

export default Photographers;
