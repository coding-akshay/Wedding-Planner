import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from '../Homepge/HomePage';
import Services from '../pages.jsx/Services';
import Home from '../pages.jsx/Home';
import ChatSection from '../cards/ChatSection';
import FrontePage from '../AuthenticationComponets/FrontePage';
import SignUp from '../AuthenticationComponets/signUp';
import Login from '../AuthenticationComponets/LoginPage';





function Mainroutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontePage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<ChatSection />} />

      </Routes>
    </Router>
  );
}

export default Mainroutes;
