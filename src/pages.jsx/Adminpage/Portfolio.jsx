import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Venues from "../../assets/Images/events-2609526.jpg";
import dance from "../../assets/Images/dance-5321562.jpg";
import gold from "../../assets/Images/gold-1369453.jpg";
import photographer from "../../assets/Images/photographer-2179204.jpg";
import beauty from "../../assets/Images/makeup-3081015.jpg";
import mehndi from "../../assets/Images/henna-7332084.jpg";
import food from "../../assets/Images/kitchen-81493.jpg";

const servicesData = [
  {
    title: "Auditorium",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    url: Venues,
    bgColor: "from-blue-400 to-blue-600",
    category: "Auditorium",
  },
   {
      title: "Photographers",
      description: "Photographers",
      url: photographer,
      bgColor: "from-pink-400 to-pink-600",
      category: "Photography",
    },
    {
      title: "Beauty",
      description: "Bridal Makeup, Family Makeup",
      url: beauty,
      bgColor: "from-red-400 to-red-600",
      category: "Beauty",
    },
    {
      title: "Mehndi",
      description: "Mehendi Artist",
      url: mehndi,
      bgColor: "from-yellow-400 to-yellow-600",
      category: "Beauty",
    },
    {
      title: "Jewellery & Accessories",
      description: "Jewellery, Flower Jewellery",
      url: gold,
      bgColor: "from-orange-400 to-orange-600",
      category: "Fashion",
    },
    {
      title: "Food",
      description: "Catering Services, Cake",
      url: food,
      bgColor: "from-purple-400 to-purple-600",
      category: "Catering",
    },
    {
      title: "Music & Dance",
      description: "DJs, Sangeet Choreographer",
      url: dance,
      bgColor: "from-gray-400 to-gray-600",
      category: "Entertainment",
    },
];

function Portfolio() {
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const navigate = useNavigate();

  useEffect(() => {
    setFilteredServices(servicesData);
  }, []);

  const handleAddProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <>
      <AdminNavbar />
      <div className="px-6 md:px-20 py-10 grid justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length === 0 ? (
            <p className="text-center text-gray-500">
              No services available at the moment.
            </p>
          ) : (
            filteredServices.map((service, index) => (
              <div
                key={index}
                className={`relative group rounded-lg shadow-lg p-6 bg-gradient-to-br ${service.bgColor} transform transition-transform hover:scale-105`}
              >
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                  <img
                    src={service.url}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white font-semibold text-center">
                      {service.title}
                    </p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-white text-center text-sm mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <button
                    onClick={handleAddProfile}
                    className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
                  >
                    Add Profile
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
