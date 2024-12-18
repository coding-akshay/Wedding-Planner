import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FrontePage from '../componets/FrontePage';
import LoginPage from '../componets/LoginPage'; 
import SignUp from '../componets/signUp';
import HomePage from '../Homepge/HomePage';




function Mainroutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default Mainroutes;
