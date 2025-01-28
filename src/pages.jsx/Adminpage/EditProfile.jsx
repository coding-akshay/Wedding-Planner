import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate instead of useHistory
import care from "../../assets/Images/icons8-profile-picture-64.png";
import AdminNavbar from "./AdminNavbar";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [yourGender, setYourGender] = useState("");
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(""); // New location state
  const [comments, setComments] = useState(""); // New comments state

  // Create navigate instance for navigation
  const navigate = useNavigate();

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Handle form submission (Save button)
  const handleSave = (e) => {
    e.preventDefault();

    // Save data
    const userProfile = {
      name,
      about,
      number,
      email,
      address,
      location,
      comments,
      yourGender,
      image,
    };

    console.log("Saved Profile Data:", userProfile);

    // After saving, navigate to the profile page
    navigate("/save-profile");
  };

  // Handle Back button click (navigate to the profile page)
  const handleBack = () => {
    navigate("/Portfolio");
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
          {/* Left Container */}
          <div className="bg-gradient-to-b from-pink-600 to-pink-300 text-center py-10 px-6 flex flex-col items-center lg:w-1/2">
            <h1 className="text-xl font-bold text-white mb-6">Set Your Profile</h1>
            <div className="relative w-40 h-40 rounded-full overflow-hidden">
              {image ? (
                <img src={image} alt="Profile Thumbnail" className="w-full h-full object-cover" />
              ) : (
                <img src={care} alt="Default Profile Icon" className="w-full h-full object-cover" />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={imageChange}
              className="hidden"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer mt-6 bg-white text-indigo-600 font-semibold px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              Upload Picture
            </label>
          </div>

          {/* Right Container */}
          <div className="p-8 flex-1 bg-gray-50">
            <form onSubmit={handleSave}>
              <div className="grid gap-4">
                {/* Existing Inputs */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="about" className="text-gray-700 font-medium mb-2">
                    About You
                  </label>
                  <textarea
                    id="about"
                    placeholder="Tell us about yourself"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
                    rows="4"
                  ></textarea>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="number" className="text-gray-700 font-medium mb-2">
                    Number
                  </label>
                  <input
                    id="number"
                    type="text"
                    placeholder="Your Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="address" className="text-gray-700 font-medium mb-2">
                    Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Your Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>

                {/* New Location Input */}
                <div className="flex flex-col">
                  <label htmlFor="location" className="text-gray-700 font-medium mb-2">
                    Location
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Your Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                  />
                </div>

                {/* New Comments Section */}
                <div className="flex flex-col">
                  <label htmlFor="comments" className="text-gray-700 font-medium mb-2">
                    Comments
                  </label>
                  <textarea
                    id="comments"
                    placeholder="Add any additional comments or feedback"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-400 outline-none resize-none"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="your-gender"
                    value="female"
                    checked={yourGender === "female"}
                    onChange={(e) => setYourGender(e.target.value)}
                    className="mr-2 text-indigo-600 focus:ring-2 focus:ring-indigo-400"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="your-gender"
                    value="male"
                    checked={yourGender === "male"}
                    onChange={(e) => setYourGender(e.target.value)}
                    className="mr-2 text-indigo-600 focus:ring-2 focus:ring-indigo-400"
                  />
                  Male
                </label>
              </div>

              <footer className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  className="bg-gray-300 text-gray-700 font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-pink-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-pink-600"
                >
                  Save
                </button>
              </footer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
