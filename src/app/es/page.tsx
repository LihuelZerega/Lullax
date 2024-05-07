import React from "react";
import NavBar from "./subcomps/NavBar";
import HeroSection from "./subcomps/HeroSection";
import Stats from "./subcomps/Stats";
import Products from "./subcomps/Products";
import Footer from "./subcomps/Footer";

function page() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <Stats />
      <Products />
      <Footer />
    </div>
  );
}

export default page;
