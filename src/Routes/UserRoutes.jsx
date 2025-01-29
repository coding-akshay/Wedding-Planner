import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from '../Homepge/HomePage';
import Services from '../pages.jsx/Services';
import Home from '../pages.jsx/Home';
import ChatSection from '../cards/ChatSection';
import Album from '../pages.jsx/Album';
import AboutUs from '../pages.jsx/AboutUs';
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
import Mehndi from '../pages.jsx/Mehndi/Mehndi';
import GangaMehandiArtist from '../pages.jsx/Mehndi/Ganga Mehandi Artist\'';
import VinodMehandiArtist from '../pages.jsx/Mehndi/Vinod Mehandi Artist';
import KeralaMehandiArtist from '../pages.jsx/Mehndi/Kerala Mehandi Artist';
import TraditionalMehandiArtist from '../pages.jsx/Mehndi/Traditional Mehandi Artist';
import JewelleryAccessories from '../pages.jsx/Jewellery & Accessories/Jewellery & Accessories';
import Joyalukkas from '../pages.jsx/Jewellery & Accessories/Joyalukkas';
import KalyanJewellers from '../pages.jsx/Jewellery & Accessories/Kalyan Jewellers';
import BhimaJewellers from '../pages.jsx/Jewellery & Accessories/Bhima Jewellers';
import RelianceJewels from '../pages.jsx/Jewellery & Accessories/Reliance Jewels';
import MalabarGoldAndDiamonds from '../pages.jsx/Jewellery & Accessories/​Malabar Gold And Diamonds';
import MusicDance from '../pages.jsx/Music & Dance/Music & Dance';
import Vedan from '../pages.jsx/Music & Dance/Vedan';
import MartinGarrix from '../pages.jsx/Music & Dance/Martin Garrix';
import Fejo from '../pages.jsx/Music & Dance/Fejo';
import MariFerrari from '../pages.jsx/Music & Dance/Mari Ferrari';
import Fooditems from '../pages.jsx/Food/fooditems';
import VegAndSnaks from '../pages.jsx/Food/Veg And Snaks';
import NonVeg from '../pages.jsx/Food/Non-veg';
import Biriyani from '../pages.jsx/Food/Briyani';
import Meels from '../pages.jsx/Food/Meels';
import Contact from '../pages.jsx/Contact';
import Wedding from '../pages.jsx/Wedding';
import Reception from '../pages.jsx/Reception';
import Engagement from '../pages.jsx/Engagement';

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
        <Route path="/AboutUs" element={<AboutUs/>} />  
        <Route path="/contact" element={<Contact />} />



        {/* chat */}
        <Route path="/chat" element={<ChatSection />} />

        {/* service */}

        <Route path="/service" element={<ServicesCard />} />
        <Route path="/service/:serviceName" element={<ServiceDetails />} />
        <Route path="/services/service/photographers" element={<Photographers />} />
        <Route path="/service/photographers" element={<Photographers />} />
        <Route path="/services/service/auditorium" element={<Venues />} />
        <Route path="/services/auditorium" element={<Venues />} />
        <Route path="/services/service/beauty" element={<Beauty />} />
        <Route path="/service/beauty" element={<Beauty />} />
        <Route path="/services/service/mehndi" element={<Mehndi />} />
        <Route path="/service/mehndi" element={<Mehndi />} />
        <Route path="/services/service/mehndi" element={<Mehndi />} />
        <Route path="/services/service/jewellery-&-accessories" element={<JewelleryAccessories />} />
        <Route path="/service/jewellery-&-accessories" element={<JewelleryAccessories />} />
        <Route path="/services/service/music-&-dance" element={<MusicDance />} />
        <Route path="/service/music-&-dance" element={<MusicDance />} />
        <Route path="/services/service/food" element={<Fooditems />} />
        <Route path="/service/food" element={<Fooditems />} />                           
        <Route path="/food/Veg-And-Snaks" element={<VegAndSnaks />} /> 
        <Route path="/food/Non-veg" element={<NonVeg />} />
        <Route path="/food/biriyani" element={<Biriyani />} /> 
        <Route path="/food/Meels" element={<Meels/>} /> 





                        

        {/* venus section */}

        <Route path="/Auditorium/SSR-Convention-AC" element={<SSRConventionAC />} />
        <Route path="/Auditorium/VRC-Convention" element={< VRCConvention/>} />
        <Route path="/Auditorium/Rajkamal-Palace" element={<RajkamalPalace />} />
        <Route path="/Auditoriums/Palm-Exotica-Boutique-Resort" element={<PalmExoticaBoutiqueResort/>} />

      
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

        {/* Mehndi section */}

        <Route path="/mehndi/Ganga-Mehandi-Artist" element={<GangaMehandiArtist/>} />   
        <Route path="/mehndi/Vinod-Mehandi-Artist" element={<VinodMehandiArtist/>} /> 
        <Route path="/mehndi/Kerala-Mehandi-Artist" element={<KeralaMehandiArtist/>} /> 
        <Route path="/mehndi/Traditional-Mehandi-Artist" element={<TraditionalMehandiArtist/>} />    

        {/* jewellery-&-accessories */}

        <Route path="/jewellery-&-accessories/Joyalukkas" element={<Joyalukkas />} />   
        <Route path="/jewellery-&-accessories/Kalyan-Jewellers" element={<KalyanJewellers/>} /> 
        <Route path="/jewellery-&-accessories/bhima-Jewellers" element={< BhimaJewellers/>} />  
        <Route path="/jewellery-&-accessories/reliance-Jewels" element={< RelianceJewels/>} />
        <Route path="/jewellery-&-accessories/malabar-Gold-And-Diamonds" element={<MalabarGoldAndDiamonds/>} /> 
        


        {/* music-&-dance */}

        <Route path="/music/Vedan" element={<Vedan/>} />
        <Route path="/music/Martin-Garrix" element={<MartinGarrix/>}/>
        <Route path="/music/Fejo-rapper" element={<Fejo/>} />
        <Route path="/music/Mari-Ferrari" element={< MariFerrari/>} />




        {/* Add E-invite Route */}
        <Route path="/einvite" element={<Einvite />} />
        <Route path="/einvite/:eventType" element={<Einvite />} />
        <Route path="/mehndi" element={<Henna />} />
        <Route path="/wedding" element={<Wedding/>} /> 
        <Route path="/reception" element={<Reception/>} /> 
        <Route path="/engagement" element={<Engagement/>} /> 


      </Routes>
    </Router>
  );
}

export default UserRoutes;
