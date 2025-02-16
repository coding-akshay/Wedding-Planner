import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Venues from "../assets/Images/events-2609526.jpg";
import dance from "../assets/Images/dance-5321562.jpg";
import gold from "../assets/Images/gold-1369453.jpg";
import photographer from "../assets/Images/photographer-2179204.jpg";
import beauty from "../assets/Images/makeup-3081015.jpg";
import mehndi from "../assets/Images/henna-7332084.jpg";
import food from "../assets/Images/kitchen-81493.jpg";
import Navbar from "../componets/Navbar";

const servicesData = [
  {
    title: "Auditorium",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    url: Venues,
    bgColor: "bg-blue-200",
    category: "Auditorium",
  },
  {
    title: "Photographers",
    description: "Photographers",
    url: photographer,
    bgColor: "bg-pink-200",
    category: "Photography",
  },
  {
    title: "Beauty",
    description: "Bridal Makeup, Family Makeup",
    url: beauty,
    bgColor: "bg-red-200",
    category: "Beauty",
  },
  // {
  //   title: "Pre Wedding Shoot",
  //   description: "Pre Wedding Shoot Locations",
  //   url: wedding,
  //   bgColor: "bg-blue-200",
  //   category: "Photography",
  // },
  {
    title: "Mehndi",
    description: "Mehendi Artist",
    url: mehndi,
    bgColor: "bg-yellow-200",
    category: "Beauty",
  },
  {
    title: "Jewellery & Accessories",
    description: "Jewellery, Flower Jewellery",
    url: gold,
    bgColor: "bg-yellow-100",
    category: "Fashion",
  },
  {
    title: "Food",
    description: "Catering Services, Cake",
    url: food,
    bgColor: "bg-purple-200",
    category: "Catering",
  },
  {
    title: "Music & Dance",
    description: "DJs, Sangeet Choreographer",
    url: dance,
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
      <div
        className="min-h-screen bg-fixed bg-cover bg-center py-10"
        style={{
          backgroundImage: `url('src/assets/Images/woman-4081760.jpg')`, 
        }}
      >
        <div className="px-6 md:px-20 grid justify-items-center">
          {/* Scrollable section with hidden scrollbar */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-h-screen overflow-auto"
            style={{
              scrollbarWidth: "none", 
              msOverflowStyle: "none", 
            }}
          >
            <style>
              {`
                /* Hide scrollbar for WebKit browsers (Chrome, Safari) */
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
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
                      to={`service/${service.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className="text-sm text-blue-500 hover:underline"
                    >
                      Learn More
                    </Link>
                  </div>
                  {/* Image Section */}
                  <div>
                    <img
                      src={service.url}
                      alt={service.title}
                      className="h-40 w-40 object-cover rounded-full"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
