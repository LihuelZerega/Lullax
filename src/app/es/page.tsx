import React from "react";
import NavBar from "./subcomps/NavBar";
import HeroSection from "./subcomps/HeroSection";
import Footer from "./subcomps/Footer";

function page() {
  return (
    <div className="bg-white">
      <NavBar />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default page;
