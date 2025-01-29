import React, { useState } from "react";
import BhimaJewellersitem from "../../assets/Images/gold-1369453.jpg";
import image1 from "../../assets/Images/druzy-665485_1280.jpg";
import image2 from "../../assets/Images/fine-jewellery-4778055_1280.jpg";
import image3 from "../../assets/Images/gems-334067_1280.jpg";
import image4 from "../../assets/Images/heart-1521377_1280.jpg";
import image5 from "../../assets/Images/jewellery-2412842_1280.jpg";
import Navbar from "../../componets/Navbar";

function BhimaJewellers() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [viewAll, setViewAll] = useState(false);

  const images = [


    { url: image1 },
    { url: image2 },
    { url: image3 },
    { url: image4 },
    { url: image5 },
    { url: image5 },
    { url: image5 },


  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentImage("");
    setViewAll(false);
  };

  const openViewAllModal = () => {
    setViewAll(true);
    setShowModal(true);
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
      {/* Venue Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <img
          src={BhimaJewellersitem}
          alt="The Royal Mahal"
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">BhimaJewellers</h1>
            <p className="text-gray-600">Kompally, Hyderabad</p>
            <p className="text-yellow-500 font-semibold mt-1">
              4.0 ⭐ (No Reviews)
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-green-600">₹30000</p>
            <p className="text-gray-600">Per Day</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              REQUEST PRICING
            </button>
          </div>
        </div>
      </div>


      {/* Albums Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Albums (7)</h2>
          <button
            onClick={openViewAllModal}
            className="text-pink-500 font-semibold hover:underline"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Album ${index + 1}`}
              className="rounded-lg w-full h-32 object-cover cursor-pointer hover:opacity-75"
              onClick={() => openModal(image.url)}
            />
          ))}
        </div>
      </div>
          

      {/* About Section */}
<div className="bg-white shadow rounded-lg p-6 mb-8">
  <h2 className="text-xl font-bold mb-4">About BhimaJewellers</h2>
  <p className="text-gray-700">
  BhimaJewellers Bridal store has been established in Hyderabad to cater to
    the intricate bridal jewelry needs of customers. Known for their
    high-quality craftsmanship and unique designs, BhimaJewellers offers a
    stunning range of bridal and wedding accessories inspired by nature
    and traditional Indian aesthetics.
  </p>
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">
      Specialization of Joyalukkas Bridal Store
    </h3>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Traditional Approach: Rich and expertly crafted jewelry.</li>
      <li>Storytellers: Unique creative pieces inspired by nature.</li>
      <li>Signature Pieces: Combining beauty and strength for timeless jewelry.</li>
    </ul>
  </div>
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">
      Designs Offered by BhimaJewellers Bridal Store
    </h3>
    <ul className="list-disc pl-6 text-gray-700">
      <li>Bridal Jewels: Necklaces, earrings, and more.</li>
      <li>Chura: Traditional bangles symbolizing commitment and love.</li>
      <li>Kaleera: Bridal accessories showcasing joy and love stories.</li>
      <li>Floral & Gota Jewelry: Stunning floral designs for your wedding.</li>
    </ul>
  </div>
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">Customization</h3>
    <p className="text-gray-700">
      If you want something special, BhimaJewellers provides customization
      options to create one-of-a-kind jewelry pieces tailored to your
      requirements. Their cheerful staff is here to make your jewelry
      shopping experience memorable.
    </p>
  </div>
  {/* Additional Content from the Image */}
  <div className="mt-4">
    <h3 className="text-lg font-semibold mb-2">Store Information</h3>
    <ul className="list-none text-gray-700">
      <li className="mb-2">
        <strong>wedding planer:</strong> 6 years 3 months
      </li>
      <li className="mb-2">
        <strong>Customization:</strong> Customization is available
      </li>
      <li className="mb-2">
        <strong>Rental Jewellery:</strong> Rental jewellery is available
      </li>
      <li className="mb-2">
        <strong>Bridal Jewellery Range:</strong> ₹20,000
      </li>
    </ul>
  </div>
</div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-3/4 lg:w-1/2">
            <button
              className="absolute top-2 right-2 text-black font-bold"
              onClick={closeModal}
            >
              ✕
            </button>
            {viewAll ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={`Full View ${index + 1}`}
                    className="rounded-lg w-full h-32 object-cover cursor-pointer hover:opacity-75"
                    onClick={() => setCurrentImage(image.url)}
                  />
                ))}
              </div>
            ) : (
              <img
                src={currentImage}
                alt="Current"
                className="rounded-lg w-full h-auto"
              />
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default BhimaJewellers
