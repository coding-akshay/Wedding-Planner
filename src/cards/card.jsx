import React from "react";

const cardData = [
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.0 Lakhs", rating: "3.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹3.5 Lakhs", rating: "2.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "4.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.9 Lakhs", rating: "4.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.3 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.7 Lakhs", rating: "3.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "2.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹3.5 Lakhs", rating: "2.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹3.0 Lakhs", rating: "4.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.7 Lakhs", rating: "3.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.6 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
   { id: 1, title: "byg story", location: "Bangalore", price: "₹2.2 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.5 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.3 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.7 Lakhs", rating: "3.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "2.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹3.5 Lakhs", rating: "2.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹3.0 Lakhs", rating: "4.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.7 Lakhs", rating: "3.0", imgSrc: "https://via.placeholder.com/300" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.6 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },
   { id: 1, title: "byg story", location: "Bangalore", price: "₹2.2 Lakhs", rating: "5.0", imgSrc: "https://via.placeholder.com/300" },

];

const Card = () => {
  const cardElements = cardData.map((card) => (
    <div key={card.id} className="border rounded-lg shadow-md hover:scale-105 transition">
      <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{card.title}</h3>
        <p className="text-gray-600">{card.location}</p>
        <p>⭐ {card.rating}</p>
        <p className="text-green-600 font-bold">{card.price}</p>
       
<button
  class="relative rounded-full bg-red-500 px-4 py-2 font-mono font-bold text-white transition-colors
   duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 
   before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping 
   before:rounded-full before:bg-red-500 hover:bg-red-700 hover:before:bg-red-700">
    Send Message</button>
</div>
</div>
  ));

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-7 p-6">{cardElements}</div>;
};

export default Card;
