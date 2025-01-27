import React, { useRef } from "react";
import Homeimages from "../assets/Images/henna-7332084.jpg";

import GalleryImage1 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage2 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage3 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage4 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage5 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage6 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage7 from "../assets/Images/wedding-1836315.jpg";
import GalleryImage8 from "../assets/Images/wedding-1836315.jpg";
import Person1 from "../assets/Images/photographer-2179204.jpg";
import Person2 from "../assets/Images/photographer-2179204.jpg";
import Person3 from "../assets/Images/photographer-2179204.jpg";
import Person4 from "../assets/Images/photographer-2179204.jpg";
import Person5 from "../assets/Images/photographer-2179204.jpg";
import Person6 from "../assets/Images/photographer-2179204.jpg";
import Navbar from "../componets/Navbar";

const Wedding = () => {
  // Refs for the sections
  const heroSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        ref={heroSectionRef}
        className="relative h-[700px] mx-auto w-screen flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Homeimages})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
           Engagement Invitation
          </h4>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Marttin <span style={{ color: "rgb(146,165,104)" }}>&</span> Julianne
          </h1>
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
            Aug 23 2018
          </h1>
        </div>
      </div>
 {/* Couple Identity Section */}
      <div className="py-8 bg-gray-200">
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 px-4  justify-items-center">
          <div className="text-center">
            <h4 className="text-2xl font-bold text-black mb-4">Marttin</h4>
            <img
              src={GalleryImage1}
              alt="Gallery Image 1"
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <h4 className="text-2xl font-bold text-black mb-4">Julianne</h4>
            <img
              src={GalleryImage2}
              alt="Gallery Image 2"
              className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Photo <span style={{ color: "rgb(225, 58, 195)" }}>Gallery</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4, GalleryImage5, GalleryImage6, GalleryImage7, GalleryImage8].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>

      {/* Featured People Section */}
      <div className="py-8 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6">Featured People</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {[
            { name: "Mark Gamberther", role: "Best Man", img: Person1 },
            { name: "Christine Doe", role: "Maid of Honor", img: Person2 },
            { name: "Pablo Ibanez", role: "Groomsman", img: Person3 },
            { name: "Samantha Markesh", role: "Bridesmaid", img: Person4 },
            { name: "Donald Bessue", role: "Groomsman", img: Person5 },
            { name: "Kesha Martinez", role: "Bridesmaid", img: Person6 },
          ].map((person, index) => (
            <div key={index} className="text-center">
              <img
                src={person.img}
                alt={person.name}
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-bold text-black">{person.name}</h4>
              <p className="text-center">{person.role}</p>
              <p className="text-center text-sm text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Events Section */}
      <div
        ref={eventsSectionRef}
        className="py-16 px-4 bg-gray-50 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">EVENTS</h2>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            voluptates velit, corrupti magnam ad assumenda, debitis officia
            quasi eaque ut necessitatibus aliquam ab quae aut.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="sm:w-1/3">
            <img
              src={GalleryImage1}
              alt="Engagement Ceremony"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="sm:w-2/3 p-6">
            <h3 className="text-xl font-bold text-gray-800">
              Engagement Ceremony
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              ABC Hotel, 9999 Hobart St, Pittsburgh, PA, 15217
              <br />
              9AM - 10:30AM, Sep 15, 2016
            </p>
            <p className="mt-4 text-gray-600">
              Lorem ipsum sit magna id efficitur Donec Nam ac augue, vehicula.
              Mollis mi mollis mi velit ultrices eu erat.
            </p>
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => scrollToSection(heroSectionRef)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Back to Mehandi Function
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
