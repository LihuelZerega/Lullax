import React from "react";
import Image from "next/image";
import Link from "next/link";
import LullaxLogo from "@/images/LullaxLogo.png";
import { FaXTwitter, FaWhatsapp, FaTiktok, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <section className="py-10 sm:pt-16 lg:pt-24 border-t border-gray-200 bg-[#242423]">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-y-12 gap-x-8 xl:gap-x-12">
            <div className="col-span-2 md:col-span-4 xl:pr-8">
              <Image className="w-auto h-9" src={LullaxLogo} alt="" />
              <p className="text-base leading-relaxed text-gray-200 mt-7">
                Marca española especializada en mancuernas ajustables. Con la
                mejor calidad y variedad en pesas automáticas.
              </p>

              <ul className="flex items-center mt-5 space-x-3 md:order-3 sm:mt-7">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#2b9f76] hover:text-white focus:text-white hover:bg-[#2b9f76] hover:border-[#2b9f76] focus:border-[#2b9f76]"
                  >
                    <FaWhatsapp />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#2b9f76] hover:text-white focus:text-white hover:bg-[#2b9f76] hover:border-[#2b9f76] focus:border-[#2b9f76]"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                      <circle cx="16.806" cy="7.207" r="1.078"></circle>
                      <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#2b9f76] hover:text-white focus:text-white hover:bg-[#2b9f76] hover:border-[#2b9f76] focus:border-[#2b9f76]"
                  >
                    <FaTiktok />
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#2b9f76] hover:text-white focus:text-white hover:bg-[#2b9f76] hover:border-[#2b9f76] focus:border-[#2b9f76]"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-gray-100 transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-[#2b9f76] hover:text-white focus:text-white hover:bg-[#2b9f76] hover:border-[#2b9f76] focus:border-[#2b9f76]"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#2b9f76]">
                Productos
              </p>

              <ul className="grid grid-cols-2 mt-6">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    NEO40{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300 mb-5"
                  >
                    {" "}
                    NEO STAND{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    NEO36{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300 mb-5"
                  >
                    {" "}
                    NEO BENCH{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    NEO32{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300 mb-5"
                  >
                    {" "}
                    NEO KET{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    M24{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300 mb-5"
                  >
                    {" "}
                    NEO BAR{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    NEO20{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#2b9f76]">Nosotros</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="https://lullax.com/sobre-lullax/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Sobre Lullax{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/politica-de-envios/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Terminos y Condiciones{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/afiliados-lullax/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Afiliados{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/blog/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-[#2b9f76]">Soporte</p>

              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href="https://lullax.com/aviso-legal/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Aviso legal{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/politica-de-privacidad/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Política de privacidad{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/politica-de-cookies/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/contact/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    Contacto{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="https://lullax.com/business-to-business/"
                    title=""
                    className="flex text-sm text-gray-100 transition-all duration-200 hover:text-gray-300 focus:text-gray-300"
                  >
                    {" "}
                    B2B{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-200" />

          <div className="flex flex-col sm:flex sm:flex-row sm:items-start sm:justify-between">
            <div className="w-full sm:max-w-xs lg:max-w-2xl">
              <p className="text-sm text-gray-200">
                “Lullax, S.L. ha sido beneficiaria del Fondo Europeo de
                Desarrollo Regional cuyo objetivo es mejorar el uso y la calidad
                de las tecnologías de la información y de las comunicaciones y
                el acceso a las mismas y gracias al que ha desarrollado acciones
                de marketing digital para la mejora de competitividad y
                productividad de la empresa. Esta acción ha tenido lugar durante
                2022. Para ello ha contado con el apoyo del programa TICCámaras
                de la Cámara de Comercio de Ciudad Real”
              </p>
            </div>

            <div className="mt-12 sm:mt-0">
              <p className="text-sm text-gray-200">
                © Copyright 2024, All Rights Reserved by Lullax S.L.
              </p>
              <div>
                <div className="flex flex-row items-start my-6">
                  <Image
                    src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715086367/Lullax/europa-1-300x254_rzumky.webp"
                    width={200}
                    height={200}
                    alt="Union Europea"
                    className="w-20 h-22"
                  />
                  <Image
                    src="https://lullax.com/wp-content/uploads/2021/10/camara_de_comercio-300x70.png"
                    width={200}
                    height={200}
                    alt="Camara De Comercio"
                    className="w-30 h-22 ml-6"
                  />
                </div>
                <p className="text-sm text-gray-200">
                  Una manera de hacer Europa.
                </p>
                <p className="text-sm text-gray-200">
                  Fondo Europeo de Desarrollo Regional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
