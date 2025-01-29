import React from 'react';
import { Link } from "react-router-dom";
import contactbgimg from '../assets/Images/contact-us-2993000_1280.jpg';
import Footer from '../componets/Footer';

function Contact() {
  return (
    <>
    <div 
      className="text-center bg-cover bg-fixed" 
      style={{ backgroundImage: `url(${contactbgimg})` }} // Fixed backgroundImage syntax
    >
      {/* Contact Section */}
      <div className="py-10 bg-gray-100 bg-opacity-10">
        <div className="max-w-xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>
          <p className="text-sm mt-2 text-gray-600">Wedding Planner.com</p>
          <p className="text-sm text-gray-600">A Unit of Matrimony.com Group</p>
          <p className="text-sm text-gray-600">
            RR Tower III, 7th Floor, Thiru Vi Ka Industrial Estate, Guindy, Chennai - 32
          </p>
          <a
            href="mailto:care@weddingplanner.com"
            className="block mt-4 text-pink-500 font-semibold hover:underline flex items-center justify-center"
          >
            ✉️ care@weddingPlanner.com
          </a>
          <a
            href="tel:8124222266"
            className="block mt-2 text-pink-500 font-semibold hover:underline flex items-center justify-center"
          >
            📞 0134222233
          </a>
        
        </div>
      </div>

      <footer className="bg-gray-300 mt-10 bg-opacity-10">
        {/* Additional Links Section */}
        <div className="mt-8 px-4 py-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Explore More Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {/** Auditorium Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Auditorium</h4>
              <ul>
                <li><Link to="/services/service/auditorium" className="text-pink-500 hover:underline">SSR Convention AC</Link></li>
                <li><Link to="/services/service/auditorium" className="text-pink-500 hover:underline">VRC Convention</Link></li>
                <li><Link to="/services/service/auditorium" className="text-pink-500 hover:underline">Rajkamal Palace</Link></li>
                <li><Link to="/services/service/auditorium" className="text-pink-500 hover:underline">Palm Exotica Boutique Resort</Link></li>
              </ul>
            </div>

            {/** Services Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Services</h4>
              <ul>
                <li><Link to="/services" className="text-pink-500 hover:underline">Service</Link></li>
              </ul>
            </div>

            {/** Photographers Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Photographers</h4>
              <ul>
                <li><Link to="/services/service/photographers" className="text-pink-500 hover:underline">Wedding Tasveer</Link></li>
                <li><Link to="/services/service/photographers" className="text-pink-500 hover:underline">Happy Stillz</Link></li>
                <li><Link to="/services/service/photographers" className="text-pink-500 hover:underline">Multi Production Clickers</Link></li>
                <li><Link to="/services/service/photographers" className="text-pink-500 hover:underline">Wedding Click</Link></li>
                <li><Link to="/services/service/photographers" className="text-pink-500 hover:underline">Happy Moment</Link></li>
              </ul>
            </div>

            {/** Beauty Section */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Beauty</h4>
              <ul>
                <li><Link to="/services/service/beauty" className="text-pink-500 hover:underline">Anil Kumar</Link></li>
                <li><Link to="/services/service/beauty" className="text-pink-500 hover:underline">Shahala</Link></li>
                <li><Link to="/services/service/beauty" className="text-pink-500 hover:underline">Makeup by Chithra</Link></li>
                <li><Link to="/services/service/beauty" className="text-pink-500 hover:underline">Bride Factory Bangalore</Link></li>
              </ul>
            </div>

          
          </div>
        </div>
      </footer>
    </div>
    <Footer/>
    </>

  );
}

export default Contact;
