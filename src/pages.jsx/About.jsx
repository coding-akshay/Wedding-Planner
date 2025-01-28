import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import care from "../../assets/Images/icons8-profile-picture-64.png";
import AdminNavbar from "./AdminNavbar";

const EditProfile = ({ setProfiles, profiles }) => {
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [yourGender, setYourGender] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const imageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const userProfile = {
      id: profiles.length + 1,
      name,
      about,
      number,
      email,
      address,
      yourGender,
      image: image || care,
    };
    setProfiles([...profiles, userProfile]);
    navigate("/save-profile");
  };

  const handleBack = () => {
    navigate("/Portfolio");
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      </div>
    </>
  );
};

export default EditProfile;
