import React from "react";
import { Link } from "react-router-dom";
import venues from '../../assets/Images/events-2609526.jpg';
import Auditorium from '../../assets/Images/pexels-anna-2037514238-30143697.jpg';
import VenuesBackgroundImage from '../../assets/Images/pexels-yungsaac-2305084.jpg';



const venuesData = [
  {
    id: 1,
    name: "SSR Convention AC",
    location: "Shamshabad, Hyderabad",
    price: "₹1,000",
    capacity: "150 to 2500",
    promotion: "-10%",
    rating: 4.5,
    label: "TOP",
    url:Auditorium,
    route: '/venues/SSR-Convention-AC', 
  },
  {
    id: 2,
    name: "VRC Convention",
    location: "Hyderabad",
    price: "₹1,000",
    capacity: "100 to 3000",
    promotion: "-5%",
    rating: 4.5,
    label: "TOP",
    url:Auditorium,
    route: '/venues/VRC-Convention', 
  },
  {
    id: 3,
    name: "Rajkamal Palace",
    location: "Kompally, Hyderabad",
    price: "₹1,500",
    capacity: "100 to 600",
    promotion: "-5%",
    rating: 3.0,
    url:Auditorium,
    route: '/venues/Rajkamal-Palace', 
  },
  {
    id: 4,
    name: "Palm Exotica Boutique Resort ",
    location: "Hyderabad",
    price: "₹3,000",
    capacity: "200 to 5000",
    promotion: "-15%",
    label: "PREMIUM",
    url:Auditorium,
    route: '/venues/Palm-Exotica-Boutique-Resort',
  },
];

function Venues() {
  return (
    <div className="px-6 md:px-20 py-10 min-h-screen bg-cover bg-center"
     style={{
            backgroundImage: `url(${VenuesBackgroundImage})`,
          }}>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-10 text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">Find your wedding venue</h1>
          <p className="text-lg text-white mt-4">
            Search through a vast selection of venues to find the place that
            perfectly matches your wedding vision.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            src={venues}
            alt="Wedding Venue"
            className="rounded-lg shadow-lg w-full object-cover h-60"
          />
        </div>
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {venuesData.map((venue) => (
          <div
            key={venue.id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={venue.url}
                alt={venue.name}
                className="h-48 w-full object-cover"
              />
              {venue.label && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {venue.label}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{venue.name}</h2>
              <p className="text-sm text-gray-600">{venue.location}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">From:</span> {venue.price}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Capacity:</span> {venue.capacity}
                  </p>
                  <p className="text-sm text-green-600">
                    {venue.promotion && `${venue.promotion} promotion`}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-4 py-2 border-t">
              <Link to={venue.route}>
                <button className="text-sm font-bold text-red-600 hover:underline">
                   Check availability
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Venues;
