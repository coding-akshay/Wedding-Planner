import React, { useState } from "react";
import ChatSection from "../cards/ChatSection";


function Photographers() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPhotographer, setSelectedPhotographer] = useState(null);

  const photographers = [
    {
      id: 1,
      name: "Bombay Photography",
      location: "Chembur, Mumbai",
      price: "\u20b975,000 per day",
      rating: 5.0,
      reviews: 45,
      description: "Meaningful is beautiful. Subtle is powerful. We look great just as we are. And that's the team!",
      image: "src/images/bombay-paparazzi.jpeg",
    },
    {
      id: 2,
      name: "kerala Photography",
      location: "Rajendra Nagar, Patna",
      price: "\u20b950,000 per day",
      rating: 4.3,
      reviews: 68,
      description:
        "A wedding is the coming together of two souls in a holy matrimony. It involves important rituals...",
      image: "src/images/maharaja-studio.jpeg",
    },
    {
      id: 3,
      name: "Ignited Photography",
      location: "Gomti Nagar, Lucknow",
      price: "\u20b940,000 per day",
      rating: 4.9,
      reviews: 54,
      description:
        "Ignited Films is a popular wedding photography and cinema brand in Lucknow. The shots clic...",
      image: "src/images/ignited-films.jpeg",
    },
    {
      id: 4,
      name: "Stories Photography",
      location: "Bandra, Mumbai",
      price: "\u20b945,000 per day",
      rating: 4.9,
      reviews: 76,
      description:
        "Stories For You is a team of photographers based in Mumbai and has been in this industry for...",
      image: "src/images/stories-simreen.jpeg",
    },
    {
      id: 5,
      name: "Frames Photography",
      location: "Noida",
      price: "\u20b950,000 per day",
      rating: 4.9,
      reviews: 42,
      description:
        "Frozen Frames is a brand which is dedicated exclusively to Premium Wedding Photography &...",
      image: "src/images/frozen-frames.jpeg",
    },
    {
        id: 5,
        name: "Bangalour Photography",
        location: "Noida",
        price: "\u20b950,000 per day",
        rating: 4.9,
        reviews: 42,
        description:
          "Frozen Frames is a brand which is dedicated exclusively to Premium Wedding Photography &...",
        image: "src/images/frozen-frames.jpeg",
      },
  ];

  const openChat = (photographer) => {
    setSelectedPhotographer(photographer);
    setIsChatOpen(true);
  };

  if (isChatOpen) {
    return <ChatSection photographer={selectedPhotographer} />;
  }

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
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={photographer.image}
              alt={photographer.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{photographer.name}</h2>
              <p className="text-sm text-gray-500">{photographer.location}</p>
              <p className="text-lg font-semibold text-red-500 mt-2">
                {photographer.price}
              </p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">{`★`.repeat(
                  Math.floor(photographer.rating)
                )}</span>
                <span className="ml-2 text-sm text-gray-600">
                  ({photographer.reviews} reviews)
                </span>
              </div>
              <p className="text-gray-700 mt-2 text-sm">
                {photographer.description}
              </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 w-full hover:bg-red-700"
                onClick={() => openChat(photographer)}
              >
                Send Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photographers;
