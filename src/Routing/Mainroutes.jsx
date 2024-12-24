import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from '../Homepge/HomePage';
import Services from '../pages.jsx/Services';
import Home from '../pages.jsx/Home';
import ChatSection from '../cards/ChatSection';
import FrontePage from '../AuthenticationComponets/FrontePage';
import SignUp from '../AuthenticationComponets/signUp';
import Login from '../AuthenticationComponets/LoginPage';
import Album from '../pages.jsx/Album';
import ServicesCard from '../cards/ServicesCard';
import ServiceDetails from '../cards/ServiceDetails';
import Venues from '../pages.jsx/Venues';
import Photographers from '../pages.jsx/Photographers';
import PhotographerProfileKerala from '../pages.jsx/PhotographerProfile/PhotographerProfileKerala';
import BengaluruPhotography from '../pages.jsx/PhotographerProfile/BengaluruPhotography';






function Mainroutes() {
  return (
    <Router>
      <Routes>


        <Route path="/" element={<FrontePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/albums" element={<Album />} />
        <Route path="/service" element={<ServicesCard />} />
         <Route path="/service/venues" element={<Venues />} />
         <Route path="/service/Photographers" element={<Photographers/>} />
         <Route path="/photographer/kerala" element={<PhotographerProfileKerala />} />
         <Route path="/photographer/bengaluru" element={<BengaluruPhotography />} />
        

       


<Route path="/service/:serviceName" element={<ServiceDetails />} />



      </Routes>
    </Router>
  );
}

export default Mainroutes;
