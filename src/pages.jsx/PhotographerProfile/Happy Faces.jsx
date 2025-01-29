import React, { useRef, useState } from 'react';
import im from '../../assets/Images/bride-6552057.jpg';
import Checkbox from '../../assets/Images/icons8-checkbox-24.png';
import bgImage from '../../assets/Images/wedding-1836315.jpg'; 
import coverimage from '../../assets/Images/wedding-1836315.jpg';
import ChatSection from '../../cards/ChatSection';
import Navbar from '../../componets/Navbar';


function HappyFaces() {
  const imageScrollRef = useRef(null);
  const [showChat, setShowChat] = useState(false);

  const scrollLeft = () => {
    imageScrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    imageScrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleMessageClick = () => {
    setShowChat(true);
  };

  return (
    <>
    <Navbar/>
    <div
      className=""
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {showChat ? (
        <ChatSection/>
      ) : (
        <div
          className="max-w-6xl mx-auto p-4 text-white"
          style={{
            backgroundImage: `url(${coverimage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
                <Navbar/>

          <div className="bg-pink-500 bg-opacity-70 p-4 rounded">
            <h1 className="text-3xl font-bold text-center mb-4">HappyFaces</h1>
            <div className="flex justify-between items-center mb-4">
              <div className="text-center p-4">
                <h2 className="text-lg">Wedding Photographer, Delhi NCR</h2>
                <p className="text-gray-600 text-white">Starting Price: ₹ 35,000 On Demand</p>
                <p className="text-gray-600 text-white">Primary Market: Delhi NCR</p>
                <p className="text-gray-600 text-white">Reviews: 2 out of 5</p>
              </div>
              <button
                onClick={handleMessageClick}
                className="p-4 rounded bg-green-500 hover:bg-green-600"
              >
                Message
              </button>
            </div>
          </div>

          <div className="flex items-center mt-4">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 flex justify-center items-center bg-black text-white rounded-full hover:bg-white hover:text-zinc-700 transition-all"
              aria-label="Scroll Right"
            >
              ←
            </button>
            <div ref={imageScrollRef} className="flex overflow-x-auto w-full scrollbar-hide">
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
              <img className="w-80 h-80 object-cover mr-4 rounded" src={im} alt="Wedding Photo" />
            </div>
            <button
              onClick={scrollRight}
              className="w-10 h-10 bg-black text-white rounded-full hover:bg-white hover:text-zinc-700 transition-all"
              aria-label="Scroll Right"
            >
              →
            </button>
          </div>

          <div className="mt-4 text-white">
            <h3 className="text-lg font-bold">Services Offered</h3>
            <ul className="list-none mt-2">
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Save The Dates Videos
              </li>
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Candid Photography
              </li>
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Candid Videography
              </li>
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Traditional Photography
              </li>
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Traditional Videography
              </li>
              <li className="flex items-center">
                <img src={Checkbox} alt="Checkbox" className="w-4 h-4 mr-2" />
                Drone Photography
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
    </>
  );
}





export default HappyFaces
