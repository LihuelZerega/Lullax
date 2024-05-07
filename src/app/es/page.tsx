"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import NavBar from "./subcomps/NavBar";
import HeroSection from "./subcomps/HeroSection";
import Stats from "./subcomps/Stats";
import Products from "./subcomps/Products";
import Community from "./subcomps/Community";
import Testimonials from "./subcomps/Testimonials";
import Faq from "./subcomps/Faq";
import Footer from "./subcomps/Footer";
import Promo from "./subcomps/Promo";

function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white">
      <Promo />
      <NavBar />
      <HeroSection />
      <Stats />
      <Products />
      <Community />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}

export default page;
