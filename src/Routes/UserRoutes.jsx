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
import VRCConvention from '../pages.jsx/venues/VRC Convention';
import RajkamalPalace from '../pages.jsx/venues/Rajkamal Palace';
import PalmExoticaBoutiqueResort from '../pages.jsx/venues/Palm Exotica Boutique Resort';
import Beauty from '../pages.jsx/Beauty/Beauty';
import AnilKumar from '../pages.jsx/Beauty/Anil Kumar';
import Shahala from '../pages.jsx/Beauty/Shahala';
import MakeupbyChithra from '../pages.jsx/Beauty/Makeup by Chithra';
import BrideFactoryBangalore from '../pages.jsx/Beauty/Bride Factory Bangalore';
import Shruthi from '../pages.jsx/Beauty/Shruthi';
import FashionBeauty from '../pages.jsx/Beauty/Fashion Beauty';

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
        <Route path="/services/service/photographers" element={<Photographers />} />
        <Route path="/service/photographers" element={<Photographers />} />
        <Route path="/services/service/venues" element={<Venues />} />
        <Route path="/service/venues" element={<Venues />} />
        <Route path="/services/service/beauty" element={<Beauty />} />
        <Route path="/service/beauty" element={<Beauty />} />


        {/* venus section */}

        <Route path="/venues/SSR-Convention-AC" element={<SSRConventionAC />} />
        <Route path="/venues/VRC-Convention" element={< VRCConvention/>} />
        <Route path="/venues/Rajkamal-Palace" element={<RajkamalPalace />} />
        <Route path="/venues/Palm-Exotica-Boutique-Resort" element={<PalmExoticaBoutiqueResort/>} />

      
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

        {/* beauty section */}
        <Route path="/beauty/Anil-Kumar" element={<AnilKumar />} />
        <Route path="/beauty/shahala" element={<Shahala/>} />
        <Route path="/beauty/Makeup-by-chithra" element={<MakeupbyChithra/>} />
        <Route path="/beauty/Bridefactory-bangalour" element={<BrideFactoryBangalore/>} />
        <Route path="/beauty/Shruthi" element={<Shruthi/>} />
        <Route path="/beauty/fashion-beauty" element={< FashionBeauty/>} />

        {/* Add E-invite Route */}
        <Route path="/einvite" element={<Einvite />} />
        <Route path="/einvite/:eventType" element={<Einvite />} />
        <Route path="/mehndi" element={<Henna />} />
      </Routes>
    </Router>
  );
}

export default UserRoutes;
