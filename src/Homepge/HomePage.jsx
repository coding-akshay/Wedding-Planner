import React from "react";
import Navbar from "../AuthenticationComponets/Navbar";
import Card from "../cards/card";
import Review from "../pages.jsx/Review";





function HomePage() {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Review/>
     
    </div>
  );
}

export default HomePage;
