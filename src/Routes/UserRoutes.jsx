import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from '../Homepge/HomePage';
import Services from '../pages.jsx/Services';
import Home from '../pages.jsx/Home';
import ChatSection from '../cards/ChatSection';
import Album from '../pages.jsx/Album';
import ServicesCard from '../cards/ServicesCard';
import ServiceDetails from '../cards/ServiceDetails';
import Venues from '../pages.jsx/Venues';
import FrontePage from '../AuthenticationComponets/LandingPage';
import Einvite from '../pages.jsx/E-invite';
import Henna from '../pages.jsx/Henna';
import Photographers from '../pages.jsx/PhotographerProfile/Photographers';
import PhotographerDetails from '../pages.jsx/PhotographerProfile/PhotographerDetails';
import WeddingTasveer from '../pages.jsx/PhotographerProfile/Wedding Tasveer';

function UserRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontePage />} />

        {/* navlinks */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home />} />
        <Route path="/albums" element={<Album />} />

        {/* chat */}
        <Route path="/chat" element={<ChatSection />} />
        <Route path="/service" element={<ServicesCard />} />
        <Route path="/service/venues" element={<Venues />} />
        <Route path="/service/:serviceName" element={<ServiceDetails />} />

        {/* Photographers section */}
        <Route path="/service/Photographers" element={<Photographers />} />
        <Route path="/photographer/:photographerName" element={<PhotographerDetails />} />
        <Route path="/photographer/WeddingTasveer" element={<WeddingTasveer />} />


        {/* Add E-invite Route */}
        <Route path="/einvite" element={<Einvite />} />
        <Route path="/einvite/:eventType" element={<Einvite />} />
        <Route path="/mehndi" element={<Henna />} />
      </Routes>
    </Router>
  );
}

export default UserRoutes;
