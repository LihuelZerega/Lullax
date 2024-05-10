"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialImage1 from "@/images/Testimonials/1.png";
import TestimonialImage2 from "@/images/Testimonials/2.svg";
import TestimonialImage3 from "@/images/Testimonials/3.png";
import TestimonialImage4 from "@/images/Testimonials/4.png";
import TestimonialImage5 from "@/images/Testimonials/5.png";
import TestimonialImage6 from "@/images/Testimonials/6.png";
import TestimonialImage7 from "@/images/Testimonials/7.png";
import TestimonialImage8 from "@/images/Testimonials/8.png";
import TestimonialImage9 from "@/images/Testimonials/9.png";
import { NextArrow, PrevArrow } from "./Arrows";

const testimonios = [
  {
    id: 1,
    name: "Alberto cacho",
    text: "Buen material y servicio rápido",
    stars: 5,
    image: TestimonialImage1,
    alt: "Alberto cacho",
  },
  {
    id: 2,
    name: "Yot",
    text: "Uno de los discos vino sin los pernos de seguridad que sujetan la pieza de platico para el anclaje. Por lo demás perfecto.",
    stars: 4,
    image: TestimonialImage2,
    alt: "Yot",
  },
  {
    id: 3,
    name: "Daniel Torres",
    text: "Muy contento con la compra, aunque tengo que seguir probando las mancuernas",
    stars: 5,
    image: TestimonialImage3,
    alt: "Daniel Torres",
  },
  {
    id: 4,
    name: "Daniel Garcia Funes",
    text: "Buen trato y me solucionaron un problema enseguida, la única objeción fue un error en la dirección del envío, por lo demás todo muy bien.",
    stars: 5,
    image: TestimonialImage4,
    alt: "Daniel Garcia Funes",
  },
  {
    id: 5,
    name: "Javier Blanco Paz",
    text: "Muy contento, muy buena compra, calidad - precio muy bueno. Me la recomendó un conocido y acertó. Muy contento con la compra",
    stars: 5,
    image: TestimonialImage5,
    alt: "Javier Blanco Paz",
  },
  {
    id: 6,
    name: "Fernando santiago",
    text: "¡Las mancuernas son increíbles! Estoy muy contento con la compra, superan mis expectativas. Se nota la calidad.",
    stars: 5,
    image: TestimonialImage6,
    alt: "Fernando santiago",
  },
  {
    id: 7,
    name: "Xavi Carpena",
    text: "De momento funcionan perfectamente, el trato inmejorable, el servicio de entrega solo fallo en el horario. Recomendable.",
    stars: 5,
    image: TestimonialImage7,
    alt: "Xavi Carpena",
  },
  {
    id: 8,
    name: "Javi Ot",
    text: "Increíbles. Son de muy buena calidad, resistentes, cómodas y mucha facilidad para adaptar al soporte y cambiar el peso",
    stars: 5,
    image: TestimonialImage8,
    alt: "Javi Ot",
  },
  {
    id: 9,
    name: "shroombadabum badabim",
    text: "100% recomendado. Todo perfecto",
    stars: 5,
    image: TestimonialImage9,
    alt: "shroombadabum badabim",
  },
];

function Testimonials() {
  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const settingsDesktop = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1300,
  };

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            <span className="text-[#2b9f76]">Reseñas</span> sobre nuestras <span className="border-b-3 border-[#2b9f76]">mancuernas ajustables</span>
          </h2>
        </div>

        {/* <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-1.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-[#2b9f76] rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
                Jenny Wilson
              </p>
              <p className="mt-1 text-base text-gray-600">
                Project Manager at Microsoft
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-2.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
                Robert Fox
              </p>
              <p className="mt-1 text-base text-gray-600">
                Founder at Brain.co
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white rounded-md shadow">
            <div className="px-8 py-12">
              <div className="relative w-24 h-24 mx-auto">
                <img
                  className="relative object-cover w-24 h-24 mx-auto rounded-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/1/avatar-3.jpg"
                  alt=""
                />
                <div className="absolute top-0 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                  </svg>
                </div>
              </div>
              <blockquote className="mt-7">
                <p className="text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat”
                </p>
              </blockquote>
              <p className="text-base font-semibold tex-tblack mt-9">
                Kristin Watson
              </p>
              <p className="mt-1 text-base text-gray-600">
                UX Designer at Google
              </p>
            </div>
          </div>
        </div> */}

        <div className="block md:hidden">
          <Slider {...settingsMobile}>
            {testimonios.map((testimonio) => (
              <div
                key={testimonio.id}
                className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center gap-x-3"
              >
                <div className="overflow-hidden bg-white rounded-md shadow mx-4 h-96">
                  <div className="flex flex-col justify-items-stretch px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                      <Image
                        className="relative object-cover w-24 h-24 mx-auto rounded-full"
                        src={testimonio.image}
                        alt=""
                      />
                      <div className="absolute top-0 right-0 flex items-center justify-center bg-[#2b9f76] rounded-full w-7 h-7">
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                      {[...Array(testimonio.stars)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-6 h-6 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base font-semibold text-black mt-2">
                      {testimonio.name}
                    </p>
                    <blockquote className="mt-3">
                      <p className="text-lg text-black">{testimonio.text}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="hidden md:block">
          <Slider {...settingsDesktop}>
            {testimonios.map((testimonio) => (
              <div
                key={testimonio.id}
                className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6"
              >
                <div className="overflow-hidden bg-white rounded-md shadow mx-4 h-96">
                  <div className="flex flex-col justify-items-stretch px-8 py-12">
                    <div className="relative w-24 h-24 mx-auto">
                      <Image
                        className="relative object-cover w-24 h-24 mx-auto rounded-full"
                        src={testimonio.image}
                        alt=""
                      />
                      <div className="absolute top-0 right-0 flex items-center justify-center bg-[#2b9f76] rounded-full w-7 h-7">
                        <svg
                          className="w-4 h-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center items-center">
                      {[...Array(testimonio.stars)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-6 h-6 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-base font-semibold text-black mt-2">
                      {testimonio.name}
                    </p>
                    <blockquote className="mt-3">
                      <p className="text-lg text-black">{testimonio.text}</p>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
