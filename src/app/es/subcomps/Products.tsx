// import { cn } from "@/utils/cn";
"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    title: "NEO20",
    description: "Mancuerna Ajustable de 20 Kg | Rango de 2 a 20 Kg",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715099807/Lullax/NEO20_q4pgqw.png",
    image2: "",
    href: "https://lullax.com/product/neo-20-mancuerna-ajustable/",
  },
  {
    title: "M24",
    description: "Mancuerna Ajustable de 24 Kg | Rango de 2,5 a 24 Kg",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715099906/Lullax/M20_gffvzo.png",
    image2: "",
    href: "https://lullax.com/product/m24-mancuerna-ajustable/",
  },
  {
    title: "NEO32",
    description: "Mancuerna Ajustable de 32 Kg | Rango de 4 a 32 Kg",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715099497/Lullax/NEO40_sbdwdj.png",
    image2: "",
    href: "https://lullax.com/product/mancuerna-ajustable-neo32-32kg/",
  },
  {
    title: "NEO36",
    description: "Mancuerna Ajustable de 36 Kg | Rango de 4 a 36 Kg",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081699/Lullax/NEO323640_xalq7e.png",
    image2: "",
    href: "https://lullax.com/product/mancuerna-ajustable-neo36-estante/",
  },
  {
    title: "NEO40",
    description: "Mancuerna Ajustable de 40,5 Kg | Rango de 4,5 a 40,5 Kg",
    image1:"https://res.cloudinary.com/dszjgdktf/image/upload/v1715100001/Lullax/NEO32_otclzh.png",
    image2: "",
    href: "https://lullax.com/product/mancuerna-ajustable-neo40kg/",
  },
  {
    title: "NEO BENCH",
    description:
      "Banco profesional de alta gama construido con materiales resistentes de calidad",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098434/Lullax/NEOBENCH_qfvlki.png",
    image2: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098434/Lullax/NEOBENCH2_wqdwtp.png",
    href: "https://lullax.com/product/neo-bench/",
  },
  {
    title: "NEO STAND",
    description: "Permite levantar y colocar las mancuernas NEO a media altura",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098589/Lullax/NEOSTAND_vmr5yj.png",
    image2: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098588/Lullax/NEOSTAND2_myuovi.png",
    href: "https://lullax.com/product/neo-stand/",
  },
  {
    title: "NEO KET",
    description:
      "Kettlebell ajustable de 22.5 Kg, con 5 posiciones de peso seleccionables.",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098759/Lullax/NEOKET_juo25m.png",
    image2: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098759/Lullax/NEOKET2_mcmq96.png",
    href: "https://lullax.com/product/neoket/",
  },
  {
    title: "NEO BAR",
    description: "Set barra plana y zeta ajustable hasta 36Kg.",
    image1:
      "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098986/Lullax/NEOBAR_lqg866.png",
    image2: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715098987/Lullax/NEOBAR2_oas5yf.png",
    href: "https://lullax.com/product/neobar/",
  },
];

function Products() {
  return (
    <section id="productos" className="py-24 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2b9f76] sm:text-4xl">
            Productos
          </h2>
          <p className="my-4 text-lg text-gray-500">
            En nuestra tienda encontrarás productos de alta calidad para tus
            entrenamientos.
          </p>
        </div> */}
        <section className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={
                i === 4 || i === 5 || i === 8
                  ? "p-4 rounded-md border border-1 border-neutral-200 md:col-span-2"
                  : "p-4 rounded-md border border-1 border-neutral-200"
              }
              whileHover={{ scale: 1.02 }}
            >
              <a href={item.href} className="hover:text-[#2b9f76]">
                <div className="w-full flex items-center justify-center bg-neutral-100 rounded-md">
                  <Image
                    src={item.image1}
                    width={260}
                    height={260}
                    alt={item.title}
                    className="p-2"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-neutral-600 dark:text-neutral-200 my-2">
                    {item.title}
                  </h1>
                  <p className="font-normal text-neutral-600  dark:text-neutral-300">
                    {item.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Products;
