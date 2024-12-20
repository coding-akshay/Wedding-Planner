import React from "react";
import Navbar from "../AuthenticationComponets/Navbar";
import Card from "../cards/card";
import Review from "../pages.jsx/Review";
import About from "../pages.jsx/About";





function HomePage() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <About/>
      <Review/>
     
    </div>
  );
}

export default HomePage;
