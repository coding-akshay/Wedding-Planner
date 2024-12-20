import React, { useState, useEffect } from "react";
import Navbar from "../AuthenticationComponets/Navbar";
import { Link } from "react-router-dom";

const servicesData = [
  { title: "Venues", description: "Banquet Halls, Marriage Garden / Lawn...", image: "src/images/Indian Wedding Phere.jpeg", bgColor: "bg-blue-200", category: "Venue" },
  { title: "Photographers", description: "Photographers", image: "src/images/Indian Wedding Phere.jpeg", bgColor: "bg-pink-200", category: "Photography" },
  { title: "Beauty", description: "Bridal Makeup, Family Makeup", image: "src/images/Indian Wedding Phere.jpeg", bgColor: "bg-red-200", category: "Beauty" },
  { title: "Pre Wedding Shoot", description: "Pre Wedding Shoot Locations", image: "src/images/Indian Wedding Phere.jpeg", bgColor: "bg-blue-200", category: "Photography" },
  { title: "Planning & Decor", description: "Wedding Planners, Decorators", image: "src/images/planning.jpg", bgColor: "bg-orange-200", category: "Planning" },
  { title: "Bridal Wear", description: "Bridal Lehengas, Kanjeevaram / Silk Sarees", image: "src/images/bridalwear.jpg", bgColor: "bg-green-200", category: "Fashion" },
  { title: "Groom Wear", description: "Sherwani, Wedding Suits / Tuxes", image: "src/images/groomwear.jpg", bgColor: "bg-teal-200", category: "Fashion" },
  { title: "Mehndi", description: "Mehendi Artist", image: "src/images/mehndi.jpg", bgColor: "bg-yellow-200", category: "Beauty" },
  { title: "Jewellery & Accessories", description: "Jewellery, Flower Jewellery", image: "src/images/jewellery.jpg", bgColor: "bg-yellow-100", category: "Fashion" },
  { title: "Invites & Gifts", description: "Invitations, Favors", image: "src/images/invites.jpg", bgColor: "bg-pink-100", category: "Stationery" },
  { title: "Music & Dance", description: "DJs, Sangeet Choreographer", image: "src/images/music.jpg", bgColor: "bg-orange-200", category: "Entertainment" },
  { title: "Food", description: "Catering Services, Cake", image: "src/images/food.jpg", bgColor: "bg-purple-200", category: "Catering" },
  { title: "Pandits", description: "Wedding Pandits", image: "src/images/pandits.jpg", bgColor: "bg-yellow-300", category: "Services" },
  { title: "Bridal Grooming", description: "Beauty and Wellness", image: "src/images/grooming.jpg", bgColor: "bg-blue-100", category: "Beauty" }
];

function ServicesCard() {
  const [filteredServices, setFilteredServices] = useState(servicesData);

  useEffect(() => {
    // Logic for filtering or other operations
    setFilteredServices(servicesData);
  }, []);

  return (
    <>
      <Navbar />
  

      <div className="px-6 md:px-20 py-10 grid justify-items-center " >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
          {filteredServices.length === 0 ? (
            <p className="text-center text-gray-500">No services available at the moment.</p>
          ) : (
            filteredServices.map((service, index) => (
              <div key={index} className={`flex items-center justify-between rounded-lg shadow-md p-4 ${service.bgColor}`}>
                {/* Text Section */}
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                  <Link
                    to={`/service/${service.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>

                Image Section
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-40 w-25 object-cover rounded-full"
                    onError={(e) => (e.target.src = "")}  // Fallback image
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
