import React from 'react';
import Navbar from '../componets/Navbar';
import bgimage5 from '../assets/Images/engineer-4922798_1280.jpg'
import bgimage1 from '../assets/Images/check-3183190_1280.jpg'  
import bgimage6 from '../assets/Images/business-5475661_1280.jpg'
import tool1 from '../assets/Images/tools_1.png'
import tool2 from '../assets/Images/tools_2.png'
import tool3 from '../assets/Images/tools_3.png'
import tool4 from '../assets/Images/tools_4.png'
import tool5 from '../assets/Images/tools_5.png'
import tool6 from '../assets/Images/tools_6.png'
import bgimg2 from '../assets/Images/people-3148100_1280.jpg' 
import bgimg3 from '../assets/Images/social-media-292988_1280.jpg'
import bgimg4 from '../assets/Images/problem-2731501_1280.jpg'


   

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        {/* About Us Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 md:px-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-white">About us</h2>
            <p className="text-gray-400">
              WeddingWire, part of The Knot Worldwide Inc., is a trusted wedding vendor directory that helps engaged couples search, compare, and find the perfect local wedding professionals for their big day...
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="src/assets/Images/love-3990000_1280.jpg"
              alt="Team holding balloons"
              className="rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Worldwide Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 md:px-16">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="src/assets/Images/map-3120436_1280.jpg"
              alt="Worldwide Map"
              className="rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 text-white">Worldwide</h2>
            <p className="text-gray-400">
              The Knot Worldwide brands connect couples and wedding vendors across...
            </p>
          </div>
        </div>

        {/* Wedding Planning Starts Here Section */}
        <div className="bg-gray-200 py-12 px-6 md:px-16 text-center">
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Wedding planning starts here</h3>
            <p className="text-gray-700">We help couples discover vendors and ideas...</p>
            <img
              src="src/assets/Images/home.png"
              alt="Wedding couple"
              className="rounded-md shadow-lg mx-auto mb-6"
            />
          </div>
        </div>

 {/* Additional Features Section */}
<div className="bg-white py-12 px-6 md:px-16">
  <h2 className="text-2xl font-semibold text-center mb-8">Why Choose Us?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Feature 1 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg  transition-shadow duration-400 relative">
      <img src={bgimage1} alt="Feature 1 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
      <div className="relative text-gray-700 mb-4">
     <img className='h-20 w-35' src={tool1} alt="" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Comprehensive Vendor Directory</h3>
      <p className="text-gray-900 relative">The ultimate wedding checklist to make sure it all gets done..</p>
    </div>

    {/* Feature 2 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
    <img src={bgimg2} alt="Feature 3 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
    <div className="relative text-gray-700 mb-4">
        <img src={tool2} alt="" className="h-20 w-35 rounded-lg" />
      </div>
      <h3 className="font-semibold text-lg mb-2">User Reviews</h3>
      <p className="text-gray-900 relative">Create and manage guest lists and RSVPs for all of your events..</p>
    </div>

    {/* Feature 3 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <img src={bgimg3} alt="Feature 3 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
      <div className="relative text-gray-700 mb-4">
      <img className='h-20 w-35' src={tool3} alt="" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Easy Planning Tools</h3>
      <p className="text-gray-900 relative">Get inspired with fashion, decor and etiquette ideas.</p>
    </div>

    {/* Feature 4 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <img src={bgimg4} alt="Feature 4 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
      <div className="relative text-gray-700 mb-4">
      <img className='h-20 w-35' src={tool4} alt="" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Tailored Support</h3>
      <p className="text-gray-900 relative">Quickly find, manage and message local vendors.</p>
    </div>

    {/* Feature 5 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300  relative">
      <img src={bgimage5} alt="Feature 5 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
      <div className="relative text-gray-700 mb-4">
      <img className='h-20 w-35' src={tool5} alt="" />
      </div>
      <h3 className="font-semibold text-lg mb-2 text-black">Expert Guidance</h3>
      <p className="text-gray-900 relative">Easily keep track and manage your wedding budget..</p>
    </div>

    {/* Feature 6 */}
    <div className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative">
      <img src={ bgimage6} alt="Feature 6 Background" className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-30 hover:opacity-60 transition-opacity duration-300" />
      <div className="relative text-gray-700 mb-4">
      <img className='h-20 w-35' src={tool6} alt="" />
      </div>
      <h3 className="font-semibold text-lg mb-2">Global Network</h3>
      <p className="text-gray-900 relative">Create a custom wedding website to share with guests.</p>
    </div>
  </div>
</div>
        {/* Contact a wedding expert for free Section */}
        <div className="bg-black py-12 px-6 md:px-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Contact a Wedding Expert for Free</h2>
          <p className="text-gray-500 mb-4">We'll be here to help you 7 days a week from 9 am to 8 pm.</p>
          <p className="text-gray-500">Call <span className="font-bold">+91 999 523 7684</span></p>
          
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2 text-gray-200 ">Get the WeddingWire app</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-blue-800">App Store</a>
              <a href="#" className="text-green-800">Google Play</a>
            </div>
          </div>

          <footer className="mt-8">
            <div className="text-gray-600">
              <p>&copy; {new Date().getFullYear()} WeddingWire</p>
              <p>Information | Contact us | Terms & privacy | Your Privacy Choices | Register your business | About us</p>
            </div>
            <div className="flex justify-center mt-4">
              <div className="mr-8">Follow us on:</div>
              <div className="flex gap-2 mr-32">
                <span className='text-blue-500 '>Facebook</span>
                <span className='text-blue-800 '>Twitter</span>
                <span className='text-pink-600 '>Instagram</span>
              </div>
            </div>
            <div className="mt-4 text-gray-600">
              <p>Choose a country: India</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
