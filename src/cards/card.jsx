import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0",imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0",imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 1, title: "byg story", location: "Bangalore", price: "₹2.5 Lakhs", rating: "4.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
  { id: 2, title: "Bella Sposa", location: "Lucknow", price: "₹2.4 Lakhs", rating: "5.0", imgSrc: "src/assets/Images/bride-6552057.jpg" },
];

const Card = () => {
  const navigate = useNavigate();

  const handleNavigateToChat = () => {
    navigate('/chat');
  };

  const cardElements = cardData.map((card) => (
    <div key={card.id} className="border rounded-lg shadow-md hover:scale-105 transition">
      <img src={card.imgSrc} alt={card.title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{card.title}</h3>
        <p className="text-gray-600">{card.location}</p>
        <p>⭐ {card.rating}</p>
        <p className="text-green-600 font-bold">{card.price}</p>
        
<button
  class="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-blue-500 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20"
>
  <span class="text-lg">Send Message</span>
  <div
    class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div class="relative h-full w-10 bg-white/30"></div>
  </div>
</button>

      </div>
    </div>
  ));

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-7 p-6">{cardElements}</div>;
};

export default Card;
//   onClick={handleNavigateToChat}