"use client";
import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-transparent">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-t from-transparent to-black pointer-events-none" />

      <div className="relative isolate px-6 pt-14 lg:px-8 bg-black">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="https://res.cloudinary.com/dszjgdktf/video/upload/v1715107863/Lullax/FitnessHero_ydlnw1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />

        {/* Contenido del Héroe */}
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-100 ring-1 ring-neutral-100/10 hover:ring-neutral-100/20">
              Anunciamos Rebajas de Verano!{" "}
              <a href="#" className="font-semibold text-[#2b9f76]">
                <span className="absolute inset-0" aria-hidden="true" />
                Ver mas <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Mancuernas <br /> Ajustables
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-100">
              Bienvenido a Lullax, marca española especializada en mancuernas
              ajustables. Con la mejor calidad y variedad en pesas automáticas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#productos"
                className="rounded-md bg-[#2b9f76] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#00a76c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2b9f76]"
              >
                Ver Productos
              </a>
              <a
                href="https://lullax.com/sobre-lullax/"
                className="text-sm font-semibold leading-6 text-neutral-100"
              >
                Conocer mas <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
