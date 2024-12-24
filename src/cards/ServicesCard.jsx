import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../AuthenticationComponets/Navbar";

const servicesData = [
  {
    title: "Venues",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    image: "src/images/Indian Wedding Phere.jpeg",
    bgColor: "bg-blue-200",
    category: "Venue",
  },
  {
    title: "Photographers",
    description: "Photographers",
    image: "src/images/Indian Wedding Phere.jpeg",
    bgColor: "bg-pink-200",
    category: "Photography",
  },
  {
    title: "Beauty",
    description: "Bridal Makeup, Family Makeup",
    image: "src/images/Indian Wedding Phere.jpeg",
    bgColor: "bg-red-200",
    category: "Beauty",
  },
  {
    title: "Pre Wedding Shoot",
    description: "Pre Wedding Shoot Locations",
    image: "src/images/Indian Wedding Phere.jpeg",
    bgColor: "bg-blue-200",
    category: "Photography",
  },
  {
    title: "Mehndi",
    description: "Mehendi Artist",
    image: "src/images/mehndi.jpg",
    bgColor: "bg-yellow-200",
    category: "Beauty",
  },
  {
    title: "Jewellery & Accessories",
    description: "Jewellery, Flower Jewellery",
    image: "src/images/jewellery.jpg",
    bgColor: "bg-yellow-100",
    category: "Fashion",
  },
  {
    title: "Food",
    description: "Catering Services, Cake",
    image: "src/images/food.jpg",
    bgColor: "bg-purple-200",
    category: "Catering",
  },
  {
    title: "Music & Dance",
    description: "DJs, Sangeet Choreographer",
    image: "src/images/music.jpg",
    bgColor: "bg-orange-200",
    category: "Entertainment",
  },
];

function ServicesCard() {
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    setFilteredServices(servicesData);
  }, []);

  return (
    <>
      <Navbar />
      <div className="px-6 md:px-20 py-10 grid justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredServices.length === 0 ? (
            <p className="text-center text-gray-500">
              No services available at the moment.
            </p>
          ) : (
            filteredServices.map((service, index) => (
              <div
                key={index}
                className={`flex items-center justify-between rounded-lg shadow-md p-4 ${service.bgColor}`}
              >
                {/* Text Section */}
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>

                  <Link
                    to={
                      service.title.toLowerCase() === "venues"
                        ? `/service/venues`
                        : service.title.toLowerCase() === "photographers"
                        ? `/service/photographers`
                        : `/service/${service.title
                            .replace(/\s+/g, "-")
                            .toLowerCase()}`
                    }
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
                {/* Image Section */}
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-25 object-cover rounded-full"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
