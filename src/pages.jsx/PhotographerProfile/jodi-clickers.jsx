import React, { useState } from "react";

function Jodiclickers() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 1",
      description: "Description 1",
    },
    {
      image: "/src/assets/Images/keralam.jpg",
      title: "Title 2",
      description: "Description 2",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 3",
      description: "Description 3",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 4",
      description: "Description 4",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 5",
      description: "Description 5",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 6",
      description: "Description 6",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 7",
      description: "Description 7",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 8",
      description: "Description 8",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 9",
      description: "Description 9",
    },
    {
      image: "/src/assets/Images/kerala.jpg",
      title: "Title 10",
      description: "Description 10",
    },
  ];

  const handleScroll = (event) => {
    const scrollIndex = Math.round(event.target.scrollTop / 500);
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
            className={`p-6 border rounded-lg mb-6 cursor-pointer h-[500px] overflow-hidden transition-transform transform hover:scale-105 ${
              index === selectedIndex ? "text-white bg-white" : "bg-white"
            }`}
          >
            <div className="h-full overflow-hidden">
              <img
                src={item.image}
                alt={`Card ${index + 1}`}
                className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/2 p-4 bg-white">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-opacity duration-300 ${
              index === selectedIndex
                ? "opacity-100"
                : "opacity-0 h-0 overflow-hidden"
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

export default Jodiclickers;
