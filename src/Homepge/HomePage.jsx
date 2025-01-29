import React from "react";
import Navbar from "../componets/Navbar";
import Category from "../cards/Category";
import Einvite from "../pages.jsx/E-invite";
import Footer from "../componets/Footer";
import Working from "../pages.jsx/working";







function HomePage() {
  return (
    <div>

      <Navbar/>
      <Category/>
      <Working/>
      <Einvite/>
      <Footer/>
    
     
     
    </div>
  );
}

export default HomePage;
