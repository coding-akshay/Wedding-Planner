import React from "react";
import Review from "../pages.jsx/Review";
import Navbar from "../componets/Navbar";
import Category from "../cards/Category";
import Einvite from "../pages.jsx/E-invite";







function HomePage() {
  return (
    <div>

      <Navbar/>
      <Category/>
      <Review/>
      <Einvite/>
    
     
     
    </div>
  );
}

export default HomePage;
