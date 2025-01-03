import React, { useState } from 'react';

function PKStudiyo() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    { image: 'image1.jpg', title: 'Title 1', description: 'Description 1' },
    { image: 'image2.jpg', title: 'Title 2', description: 'Description 2' },
    { image: 'image3.jpg', title: 'Title 3', description: 'Description 3' },
    { image: 'image1.jpg', title: 'Title 4', description: 'Description 4' },
    { image: 'image2.jpg', title: 'Title 5', description: 'Description 5' },
    { image: 'image3.jpg', title: 'Title 6', description: 'Description 6' },
    { image: 'image1.jpg', title: 'Title 7', description: 'Description 7' },
    { image: 'image2.jpg', title: 'Title 8', description: 'Description 8' },
    { image: 'image3.jpg', title: 'Title 9', description: 'Description 9' },
    { image: 'image1.jpg', title: 'Title 10', description: 'Description 10' },
    // Add more items as needed
  ];

  const handleScroll = (event) => {
    const scrollIndex = Math.round(event.target.scrollTop / 150);
    setSelectedIndex(scrollIndex);
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-2/4 overflow-y-scroll bg-gray-100 p-4"
        onScroll={handleScroll}
      >
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`p-6 border rounded-lg mb-6 cursor-pointer h-[500px] transition-transform transform hover:scale-105 ${
              index === selectedIndex ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            <img src={item.image} alt={`Card ${index + 1}`} className="w-full rounded" />
          </div>
        ))}
      </div>
      <div className="w-1/2 p-4 bg-white">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-300 ${
              index === selectedIndex ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PKStudiyo;
