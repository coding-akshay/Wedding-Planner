import React from "react";
import { useNavigate } from "react-router-dom";
import kerala from "../assets/Images/kerala-6570408.jpg"
import bengaluru from "../assets/Images/bride-6552057.jpg"
import bombay from "../assets/Images/wedding-3649749.jpg"
import gulf from "../assets/Images/wedding-1836315.jpg"





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
      location: "Bengaluru",
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
        onClick={() => navigate(photographer.route)} 
      >
        <img
          src={photographer.url}
          alt={photographer.name}
          className="h-48 w-full object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{photographer.name}</h2>
          <p className="text-sm text-gray-500">{photographer.location}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Photographers;
