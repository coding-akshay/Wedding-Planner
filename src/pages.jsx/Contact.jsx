// import { link } from 'framer-motion/client';
import React from 'react';
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className=" text-center">
      {/* Contact Section */}
      <div className="py-10">
        <h2 className="text-lg font-bold">Contact Us</h2>
        <p className="text-sm mt-2">Wedding Planner.com</p>
        <p className="text-sm">A Unit of Matrimony.com Group</p>
        <p className="text-sm">
          RR tower III, 7th floor Thiru Vi Ka Industrial Estate, Guindy, Chennai - 32
        </p>
        <a
          href="mailto:care@weddingplanner.com"
          className="block mt-4 text-pink-500 font-semibold"
        >
          care@weddingPlanner.com
        </a>
        <a href="tel:8124222266" className="block mt-2 text-pink-500 font-semibold">
          0134222233
        </a>
      </div>

      <footer className="bg-gray-300">
  {/* Existing content here */}

  {/* Additional Links Section */}
  <div className="mt-8 px-4 bg-white">
    <h3 className="text-lg font-bold text-gray-800 mb-4">Explore More Categories</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {/* ////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Auditorium</h4>
        <ul>
          <li><a href="/services/service/auditorium" className="text-pink-500 hover:underline">SSR Convention AC</a></li>
          <li><a href="/services/service/auditorium" className="text-pink-500 hover:underline">VRC Convention</a></li>
          <li><a href="/services/service/auditorium" className="text-pink-500 hover:underline">Rajkamal Palace</a></li>
          <li><a href="/services/service/auditorium" className="text-pink-500 hover:underline">Palm Exotica Boutique Resort</a></li>

        </ul>
      </div>
      {/* ////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Services</h4>
        <ul>
          <li><a href="/services" className="text-pink-500 hover:underline">Service</a></li>
         
        </ul>
      </div>
      {/* //////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Photographers</h4>
        <ul>
          <li><a href="/services/service/photographers" className="text-pink-500 hover:underline">Wedding Tasveer</a></li>
          <li><a href="/services/service/photographers" className="text-pink-500 hover:underline">Happy Stillz</a></li>
          <li><a href="/services/service/photographers" className="text-pink-500 hover:underline">Multi Production Clickers</a></li>
          <li><a href="/services/service/photographers" className="text-pink-500 hover:underline">Wedding Click</a></li>
          <li><a href="/services/service/photographers" className="text-pink-500 hover:underline">Happy Moment</a></li>
        </ul>
      </div>
      {/* ////////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Beauty</h4>
        <ul>
          <li><a href="/services/service/beauty" className="text-pink-500 hover:underline">Anil Kumar</a></li>
          <li><a href="/services/service/beauty" className="text-pink-500 hover:underline">Shahala</a></li>
          <li><a href="/services/service/beauty" className="text-pink-500 hover:underline">Makeup by Chithra</a></li>
          <li><a href="/services/service/beauty" className="text-pink-500 hover:underline">Bride Factory Bangalore</a></li>

          
        </ul>
      </div>
      {/* /////////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Mehndi</h4>
        <ul>
          <li><a href="services/service/mehndi" className="text-pink-500 hover:underline">Ganga Mehandi Artist</a></li>
          <li><a href="services/service/mehndi" className="text-pink-500 hover:underline">Vinod Mehandi Artist</a></li>
          <li><a href="services/service/mehndi" className="text-pink-500 hover:underline">Kerala Mehandi Artist</a></li>
          <li><a href="services/service/mehndi" className="text-pink-500 hover:underline">Traditional Mehandi Artist</a></li>


          
        </ul>
      </div>
      {/* /////////////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Jewellery & Accessories</h4>
        <ul>
          <li><a href="/service/jewellery-&-accessories" className="text-pink-500 hover:underline">Joyalukkas</a></li>
          <li><a href="/service/jewellery-&-accessories" className="text-pink-500 hover:underline">Kalyan Jewellers</a></li>
          <li><a href="/service/jewellery-&-accessories" className="text-pink-500 hover:underline">Bhima Jewellers</a></li>
          <li><a href="/service/jewellery-&-accessories" className="text-pink-500 hover:underline">Reliance Jewels</a></li>
          <li><a href="/service/jewellery-&-accessories" className="text-pink-500 hover:underline">​Malabar Gold And Diamonds</a></li>

        
        </ul>
      </div>
      {/* ////////////////////   */}
      <div>
        <h4 className="font-semibold text-gray-700">Food</h4>
        <ul>
          <li><a href="/service/food" className="text-pink-500 hover:underline">Veg And Snaks</a></li>
          <li><a href="/service/food" className="text-pink-500 hover:underline">Non-veg</a></li>
          <li><a href="/service/food" className="text-pink-500 hover:underline">Biriyani</a></li>
          <li><a href="/service/food" className="text-pink-500 hover:underline">Meels</a></li>

        </ul>
      </div>
      {/* ///////////////////// */}
      <div>
        <h4 className="font-semibold text-gray-700">Music & Dance</h4>
        <ul>
          <li><a href="/service/music-&-dance" className="text-pink-500 hover:underline">Vedan</a></li>
          <li><a href="/service/music-&-dance" className="text-pink-500 hover:underline">Martin Garrix</a></li>
          <li><a href="/service/music-&-dance" className="text-pink-500 hover:underline">Fejo (rapper)</a></li>
          <li><a href="/service/music-&-dance" className="text-pink-500 hover:underline">Mari Ferrari</a></li>

        </ul>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Contact;
