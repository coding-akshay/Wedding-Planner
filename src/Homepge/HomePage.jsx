import React from "react";
// import Card from "../cards/card";
import Review from "../pages.jsx/Review";
// import About from "../pages.jsx/About";
import Navbar from "../componets/Navbar";
import Category from "../cards/Category";
import Einvite from "../pages.jsx/E-invite";






function HomePage() {
  return (
    <div>

      <Navbar/>
      <Category/>
      {/* <Card/> */}
      {/* <About/> */}
      <Review/>
      <Einvite/>
     
    </div>
  );
}

export default HomePage;
