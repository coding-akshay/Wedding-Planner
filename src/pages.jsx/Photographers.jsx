import React from "react";
import { useNavigate } from "react-router-dom";
import kerala from "../assets/kerala-6570408.jpg"
import bengaluru from "../assets/bride-6552057.jpg"
import bombay from "../assets/wedding-3649749.jpg"
import gulf from "../assets/wedding-1836315.jpg"
import koriyan from "../assets/wedding-5828757.jpg"
import kashmir from "../assets/couple-7065652.jpg"




function Photographers() {
  const navigate = useNavigate();

  const photographers = [
    {
      id: 1,
      name: "Kerala Photography",
      location: "Kerala",
      url:kerala,
      route: "/photographer/kerala", 
    },
    {
      id: 2,
      name: "Bengaluru Photography",
      location: "Electronic City",
      url:bengaluru,
      route: "/photographer/bengaluru", 
    },
    {
        id: 3,
        name: "Bombay Photography",
        location: "mumbai",
        url:bombay,
        route: "/photographer/bombay", 
      },
      {
        id: 4,
        name: "Gulf Photography",
        location: "gulf",
        url:gulf,
        route: "/photographer/gulf", 
      },
      {
        id: 5,
        name: "Koriyan Photography",
        location: "china",
        url:koriyan,
        route: "/photographer/koriyan", 
      },
      {
        id: 6,
        name: "kashmir Photography",
        location: "Manali",
        url:kashmir,
        route: "/photographer/kashmir", 
      },
  ];

  return (
    <div className="px-6 md:px-20 py-10">
  <h1 className="text-3xl font-bold">Photographers</h1>
  <p className="text-lg text-gray-700 my-4">
    Explore the best photographers for your special moments!
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {photographers.map((photographer) => (
      <div
        key={photographer.id}
        className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
        onClick={() => navigate(photographer.route)} // Navigate to specific route
      >
        <img
          src={photographer.url}
          alt={photographer.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{photographer.name}</h2>
          <p className="text-sm text-gray-500">{photographer.location}</p>
          {/* <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-red-700"
            onClick={() => navigate(photographer.route)}
          >
            Check Profile
          </button> */}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Photographers;
