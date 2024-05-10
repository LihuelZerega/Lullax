import React from "react";
import NavBar from "./subcomps/NavBar";
import HeroSection from "./subcomps/HeroSection";
import Stats from "./subcomps/Stats";
import TruspilotImage from "./subcomps/TruspilotImage";
import Products from "./subcomps/Products";
import Community from "./subcomps/Community";
import Testimonials from "./subcomps/Testimonials";
import Faq from "./subcomps/Faq";
import Footer from "./subcomps/Footer";
import Promo from "./subcomps/Promo";

function page() {
  return (
    <div className="bg-white">
      <Promo />
      <NavBar />
      <HeroSection />
      <Stats />
      <TruspilotImage />
      <Products />
      <Community />
      <Testimonials />
      {/* <Faq /> */}
      <Footer />
    </div>
  );
}

export default page;
