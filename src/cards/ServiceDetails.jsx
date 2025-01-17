import React from "react";
import { useParams } from "react-router-dom";

const servicesData = [
  {
    title: "Auditorium",
    description: "Banquet Halls, Marriage Garden / Lawn...",
    image: "src/assets/Images/Indian Wedding Phere.jpeg",
    bgColor: "bg-blue-200",
    category: "Auditorium",
  },
  {
    title: "Photographers",
    description: "Photographers",
    image: "src/assets/Images/Indian Wedding Phere.jpeg",
    bgColor: "bg-pink-200",
    category: "Photography",
  },
  {
    title: "Beauty",
    description: "Bridal Makeup, Family Makeup",
    image: "src/assets/Images/Indian Wedding Phere.jpeg",
    bgColor: "bg-red-200",
    category: "Beauty",
  },
  // {
  //   title: "Pre Wedding Shoot",
  //   description: "Pre Wedding Shoot Locations",
  //   image: "src/assets/Images/Indian Wedding Phere.jpeg",
  //   bgColor: "bg-blue-200",
  //   category: "Photography",
  // },
  {
    title: "Mehndi",
    description: "Mehendi Artist",
    image: "src/assets/Images/mehndi.jpg",
    bgColor: "bg-yellow-200",
    category: "Beauty",
  },
  {
    title: "Jewellery & Accessories",
    description: "Jewellery, Flower Jewellery",
    image: "src/assets/Images/jewellery.jpg",
    bgColor: "bg-yellow-100",
    category: "Fashion",
  },
  {
    title: "Food",
    description: "Catering Services, Cake",
    image: "src/assets/Images/food.jpg",
    bgColor: "bg-purple-200",
    category: "Catering",
  },
  {
    title: "Music & Dance",
    description: "DJs, Sangeet Choreographer",
    image: "src/assets/Images/music.jpg",
    bgColor: "bg-orange-200",
    category: "Entertainment",
  },

 
];

function ServiceDetails() {
  const { serviceName } = useParams(); 
  const service = servicesData.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, "-") === serviceName
  );

  if (!service) {
    return <p className="text-center text-red-500">Service not found!</p>;
  }

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold">{service.title}</h1>
      <p className="text-lg text-gray-700 my-4">{service.description}</p>
      <img
        src={service.image}
        alt={service.title}
        className="h-60 w-full object-cover rounded-lg shadow-lg"
      />
      <p className="text-sm text-gray-600 mt-4">Category: {service.category}</p>
    </div>
  );
}

export default ServiceDetails;
