import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Einvite() {
  const [currentTag, setCurrentTag] = useState(""); 
  const [imageSrc, setImageSrc] = useState("src/assets/Images/couple-7065652.jpg"); 
  const navigate = useNavigate();

  // Map each tag to its corresponding image
  const imageMap = {
    Mehndi: "src/assets/Images/kerala.jpg",
    Wedding: "src/assets/Images/dance-5321562.jpg",
    Reception: "src/assets/Images/wedding-5828757.jpg",
    Engagement: "src/assets/Images/wedding-1836315.jpg",
  };

  const handleTagClick = (tag) => {
    // Update the selected tag
    setCurrentTag(tag);

    // Update the placeholder image based on the selected tag
    setImageSrc(imageMap[tag] || "default-placeholder.jpg");
  };

  const handleEyeButtonClick = () => {
    // Navigate to a page based on the current selected tag
    if (currentTag) {
      navigate(`/${currentTag.toLowerCase()}`); // e.g., /mehndi, /wedding, etc.
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      {/* Heading and description */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-pink-500">
          Welcome to E-invite
        </h1>
        <p className="text-sm md:text-lg text-gray-700">
          Customize and send free Online Invitations for your Mehndi, Wedding,
          Reception, and Engagement events using our wide selection of
          templates.
        </p>
      </div>

      {/* Top side box content */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {["Mehndi", "Wedding", "Reception", "Engagement"].map((tag) => (
          <div
            key={tag}
            className="bg-pink-500 p-4 rounded-lg shadow-md w-full sm:w-1/2 md:w-1/4 h-16 flex justify-center items-center text-white cursor-pointer hover:bg-pink-600"
            onClick={() => handleTagClick(tag)} // Update the tag on click
          >
            <p className="text-sm md:text-lg font-bold">{tag}</p>
          </div>
        ))}
      </div>

      {/* Placeholder image */}
      <div className="bg-gray-200 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 h-64 flex justify-center items-center">
        <img
          src={imageSrc} // Dynamically set image based on selected tag
          alt={`${currentTag} placeholder`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Eye button */}
      <button
        className="bg-gray-100 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded mt-6"
        onClick={handleEyeButtonClick} // Navigate to the tag page
      >
        Open 👁️
      </button>
    </div>
  );
}

export default Einvite;
