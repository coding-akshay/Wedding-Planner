import React, { useRef } from "react";

function Album() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (category) => {
    alert(`You clicked on ${category}`);
  };

  const cardsData = [
    {
      imgSrc: "https://via.placeholder.com/300x300?text=Soumya+and+Khaleel",
      title: "Soumya and Khaleel",
      location: "Real Wedding, Italy",
      description: "Lovely pastel pink and white floral mandap decor for the wedding.",
    },
    {
      imgSrc: "https://via.placeholder.com/300x300?text=Vedika+and+Omair",
      title: "Vedika and Omair",
      location: "Real Wedding, Jaisalmer",
      description: "Stunning shot of the couple for a no-rituals wedding.",
    },
    {   
      imgSrc: "https://via.placeholder.com/300x300?text=Kuvam+and+Naman",
      title: "Kuvam and Naman",
      location: "Real Wedding, Goa",
      description: "Just married couple with a floral mandap backdrop.",
    },
    {
        imgSrc: "https://via.placeholder.com/300x300?text=Soumya+and+Khaleel",
        title: "Soumya and Khaleel",
        location: "Real Wedding, Italy",
        description: "Lovely pastel pink and white floral mandap decor for the wedding.",
      },
      {
        imgSrc: "https://via.placeholder.com/300x300?text=Vedika+and+Omair",
        title: "Vedika and Omair",
        location: "Real Wedding, Jaisalmer",
        description: "Stunning shot of the couple for a no-rituals wedding.",
      },
      {
        imgSrc: "https://via.placeholder.com/300x300?text=Kuvam+and+Naman",
        title: "Kuvam and Naman",
        location: "Real Wedding, Goa",
        description: "Just married couple with a floral mandap backdrop.",
      },
      {
        imgSrc: "https://via.placeholder.com/300x300?text=Soumya+and+Khaleel",
        title: "Soumya and Khaleel",
        location: "Real Wedding, Italy",
        description: "Lovely pastel pink and white floral mandap decor for the wedding.",
      },
      {
        imgSrc: "https://via.placeholder.com/300x300?text=Vedika+and+Omair",
        title: "Vedika and Omair",
        location: "Real Wedding, Jaisalmer",
        description: "Stunning shot of the couple for a no-rituals wedding.",
      },
      {
        imgSrc: "https://via.placeholder.com/300x300?text=Kuvam+and+Naman",
        title: "Kuvam and Naman",
        location: "Real Wedding, Goa",
        description: "Just married couple with a floral mandap backdrop.",
      },
  ];

  return (
    <div className="p-6 font-sans">
      {/* Scrollable Photos Section */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 text-xl bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
          ref={scrollRef}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.location}</p>
                <p className="text-sm mt-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="p-2 text-xl bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200"
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Album;
