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
import Photographers from '../pages.jsx/Photographers';
import PhotographerProfileKerala from '../pages.jsx/PhotographerProfile/PhotographerProfileKerala';
import BengaluruPhotography from '../pages.jsx/PhotographerProfile/BengaluruPhotography';
// import Jodiclickers from '../pages.jsx/PhotographerProfile/jodi-clickers';
// import PKStudiyo from '../pages.jsx/PhotographerProfile/PkStudios';
import FrontePage from '../AuthenticationComponets/LandingPage';






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

         {/* {phtosection} */}
         <Route path="/service/Photographers" element={<Photographers/>} />
         <Route path="/photographer/kerala" element={<PhotographerProfileKerala />} />
         <Route path="/photographer/bengaluru" element={<BengaluruPhotography />} />
         {/* <Route path="/photographers/jodiclickers" element={<Jodiclickers />} />
         <Route path="/photographers/pkstudios" element={<PKStudiyo />} /> */}

      </Routes>
    </Router>
  );
}

export default UserRoutes;
