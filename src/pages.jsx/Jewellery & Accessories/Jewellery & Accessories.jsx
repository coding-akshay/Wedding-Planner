import React from "react";
import { Link } from "react-router-dom";
import Jewellerys from "../../assets/Images/gold-1369453.jpg";
import Jewellerysicon from "../../assets/Images/accessories-5644341_1280.jpg";
import KalyanJewellers from "../../assets/Images/sapphire-ring-2119613_1280.jpg";
import BhimaJewellers from "../../assets/Images/wedding-2586137_1280.jpg";
import Malabar from "../../assets/Images/jewellery-3968328_1280.jpg";
import Reliance  from "../../assets/Images/gold-3184582_1280.jpg";  

import JewelleryBackgroundImage from "../../assets/Images/bracelet-1198737_1280.jpg";
import Navbar from "../../componets/Navbar";

const Jewelleryitem = [
  {
    id: 1,
    name: "Joyalukkas",
    location: "Shamshabad, Hyderabad",
    price: "₹1,000",
    capacity: "150 to 2500",
    promotion: "-10%",
    rating: 4.5,
    label: "TOP",
    url:Jewellerys,
    route: "/jewellery-&-accessories/Joyalukkas",
  },
  {
    id: 2,
    name: "Kalyan Jewellers",
    location: "Hyderabad",
    price: "₹1,000",
    capacity: "100 to 3000",
    promotion: "-5%",
    rating: 4.5,
    label: "TOP",
    url:KalyanJewellers,
    route: "/jewellery-&-accessories/Kalyan-Jewellers",
  },
  {
    id: 3,
    name: "Bhima Jewellers",
    location: "Kompally, Hyderabad",
    price: "₹1,500",
    capacity: "100 to 600",
    promotion: "-5%",
    rating: 3.0,
    url:BhimaJewellers,
    route: "/jewellery-&-accessories/bhima-Jewellers"
  },
  {
    id: 3,
    name: "Reliance Jewels",
    location: "Kompally, Hyderabad",
    price: "₹1,500",
    capacity: "100 to 600",
    promotion: "-5%",
    rating: 3.0,
    url:Reliance ,
    route: "/jewellery-&-accessories/reliance-Jewels",
  }, 
  {
    id: 3,
    name: "​Malabar Gold And Diamonds",
    location: "Kompally, Hyderabad",
    price: "₹1,500",
    capacity: "100 to 600",
    promotion: "-5%",
    rating: 3.0,
    url:Malabar,
    route: "/jewellery-&-accessories/malabar-Gold-And-Diamonds",
  },
];

function JewelleryAccessories() {
  return (
    <>
    <Navbar/>
    <div
      className="px-6 md:px-20 py-10 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${JewelleryBackgroundImage})`,
      }}
    >
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
            src={Jewellerysicon} 
            alt="Wedding Venue"
            className="rounded-lg shadow-lg w-full object-cover h-60"
          />
        </div>
      </div>

      {/* Venue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Jewelleryitem.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Image Section */}
            <div className="relative">
              <img
                src={item.url}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
              {item.label && (
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {item.label}
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.location}</p>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">From:</span> {item.price}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Capacity:</span> {item.capacity}
                  </p>
                  <p className="text-sm text-green-600">
                    {item.promotion && `${item.promotion} promotion`}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="px-4 py-2 border-t">
              <Link to={item.route}>
                <button className="text-sm font-bold text-red-600 hover:underline">
                  Check availability
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default JewelleryAccessories;
