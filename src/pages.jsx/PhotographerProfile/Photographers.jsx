import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tasveer from '../../assets/Images/photographer-5149664_1280.jpg';
import Studio from '../../assets/Images/camera-2607298_1280.jpg';
import Stillz from '../../assets/Images/bride-and-groom-952451_1280.jpg';
import Clickers from '../../assets/Images/man-5919303_1280.jpg';
import Top from '../../assets/Images/lens-6477843_1280.jpg';
import Moment from '../../assets/Images/photographer-4788232_1280.jpg';
import Wedding from '../../assets/Images/woman-8322091_1280.jpg';
import Avarnya from '../../assets/Images/camera-1866947_1280.jpg';
import Faces from '../../assets/Images/iceland-7376065_1280.jpg';
import BackgroundImage from '../../assets/Images/camera-1362419_1280.jpg'
import Navbar from '../../componets/Navbar';

const photographers = [
  {
    id: 1,
    title: 'Wedding Tasveer',
    location: 'Delhi',
    price: 50000,
    route: '/photographer/WeddingTasveer',
    url: Tasveer,
  },
  {
    id: 2,
    title: 'Happy Stillz',
    location: 'Delhi',
    price: 40000,
    route: '/photographer/HappyStillz',
    url: Stillz,
  },
  {
    id: 3,
    title: 'Multi Production Clickers',
    location: 'Kerala',
    price: 20000,
    route: '/photographer/Multi-Production-Clickers',
    url: Clickers,
  },
  {
    id: 4,
    title: 'Wedding Click',
    location: 'Bangalore',
    price: 50000,
    route: '/photographer/Wedding-Click',
    url: Wedding,
  },
  {
    id: 5,
    title: 'Happy Moment',
    location: 'Mumbai',
    price: 10000,
    route: '/photographer/Happy-Moment',
    url: Moment,
  },
  {
    id: 6,
    title: 'Wedding Studio',
    location: 'Kolkata',
    price: 70000,
    route: '/photographer/Wedding-Studio',
    url: Studio,
  },
  {
    id: 7,
    title: 'Avarnya Studio',
    location: 'Punjab',
    price: 60000,
    route: '/photographer/Avarnya-Studio',
    url: Avarnya,
  },
  {
    id: 8,
    title: 'Happy Faces',
    location: 'Kerala',
    price: 35000,
    route: '/photographer/Happy-Faces',
    url: Faces,
  },
  {
    id: 9,
    title: 'Top Clicks',
    location: 'Tamil Nadu',
    price: 55000,
    route: '/photographer/Top-Clicks',
    url: Top,
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
    <>
    <Navbar/>
    <div
      className="p-6 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
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
                src={photographer.url || 'default-image-path.jpg'}
                alt={photographer.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{photographer.title}</h3>
              <p className="text-gray-600 mb-1">{photographer.location}</p>
              <p className="text-pink-600 font-bold mb-2">
                ₹{photographer.price.toLocaleString('en-IN')}
              </p>
              <button className="bg-pink-500 text-white py-2 px-4 rounded w-full hover:bg-pink-600">
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
    </>
  );
}

export default Photographers;
