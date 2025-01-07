import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from '../Homepge/HomePage';
import Services from '../pages.jsx/Services';
import Home from '../pages.jsx/Home';
import ChatSection from '../cards/ChatSection';
import Album from '../pages.jsx/Album';
import ServicesCard from '../cards/ServicesCard';
import ServiceDetails from '../cards/ServiceDetails';
import FrontePage from '../AuthenticationComponets/LandingPage';
import Einvite from '../pages.jsx/E-invite';
import Henna from '../pages.jsx/Henna';
import Photographers from '../pages.jsx/PhotographerProfile/Photographers';
// import PhotographerDetails from '../pages.jsx/PhotographerProfile/PhotographerDetails';
import WeddingTasveer from '../pages.jsx/PhotographerProfile/Wedding Tasveer';
import HappyStillz from '../pages.jsx/PhotographerProfile/Happy Stillz';
import MultiProductionClickers from '../pages.jsx/PhotographerProfile/Multi Production Clickers';
import WeddingClick from '../pages.jsx/PhotographerProfile/Wedding Click';
import HappyMoment from '../pages.jsx/PhotographerProfile/Happy Moment';
import WeddingStudio from '../pages.jsx/PhotographerProfile/Wedding Studio';
import AvarnyaStudio from '../pages.jsx/PhotographerProfile/Avarnya Studio';
import HappyFaces from '../pages.jsx/PhotographerProfile/Happy Faces';
import TopClicks from '../pages.jsx/PhotographerProfile/Top Clicks';
import Venues from '../pages.jsx/venues/Venues';
import SSRConventionAC from '../pages.jsx/venues/SSR Convention AC';

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

        {/* service */}
        <Route path="/service" element={<ServicesCard />} />
        <Route path="/service/:serviceName" element={<ServiceDetails />} />
        <Route path="/services/service/venues" element={<Venues />} />
        <Route path="/service/venues" element={<Venues />} />

        {/* venus section */}

        <Route path="/venues/SSR-Convention-AC" element={<SSRConventionAC />} />



        {/* Photographers section */}
        <Route path="/services/service/photographers" element={<Photographers />} />
        <Route path="/service/photographers" element={<Photographers />} />
        {/* <Route path="/photographer/:photographerName" element={<PhotographerDetails />} /> */}
        <Route path="/photographer/WeddingTasveer" element={<WeddingTasveer />} />
        <Route path="/photographer/HappyStillz" element={< HappyStillz/>} />
        <Route path="/photographer/Multi-Production-Clickers" element={<MultiProductionClickers/>} />
        <Route path="/photographer/Wedding-Click" element={<WeddingClick/>} />
        <Route path="/photographer/Happy-Moment" element={<HappyMoment/>} />
        <Route path="/photographer/Wedding-Studio" element={<WeddingStudio/>} />
        <Route path="/photographer/Avarnya-Studio" element={<AvarnyaStudio/>} />
        <Route path="/photographer/Happy-Faces" element={<HappyFaces/>} />
        <Route path="/photographer/Top-Clicks" element={<TopClicks/>} />


        



        {/* Add E-invite Route */}
        <Route path="/einvite" element={<Einvite />} />
        <Route path="/einvite/:eventType" element={<Einvite />} />
        <Route path="/mehndi" element={<Henna />} />
      </Routes>
    </Router>
  );
}

export default UserRoutes;
