"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import LullaxLogo from "@/images/LullaxLogo.png";
import EspanaIcon from "@/images/Flags/espana.png";
import PortugalIcon from "@/images/Flags/portugal.png";
import UnitedKingdomIcon from "@/images/Flags/reino-unido.png";
import FranciaIcon from "@/images/Flags/francia.png";
import AlemaniaIcon from "@/images/Flags/alemania.png";
import ItaliaIcon from "@/images/Flags/italia.png";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MdConnectWithoutContact } from "react-icons/md";
import {
  FaRegBuilding,
  FaRegFileAlt,
  FaUserFriends,
  FaBloggerB,
} from "react-icons/fa";
import UserIcon from "@/images/user-stroke-rounded.svg";
import ShoppingBag01Icon from "@/images/shopping-bag-01-stroke-rounded.svg";

const MancuernasAjustables = [
  {
    name: "NEO40",
    description: "Mancuerna Ajustable 40,5 kg",
    href: "https://lullax.com/product/mancuerna-ajustable-neo40kg/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081699/Lullax/NEO323640_xalq7e.png",
  },
  {
    name: "NEO36",
    description: "Mancuerna Ajustable 36 kg",
    href: "https://lullax.com/product/mancuerna-ajustable-neo36-estante/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081699/Lullax/NEO323640_xalq7e.png",
  },
  {
    name: "NEO32",
    description: "Mancuerna Ajustable 32 kg",
    href: "https://lullax.com/product/mancuerna-ajustable-neo32-32kg/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081699/Lullax/NEO323640_xalq7e.png",
  },
  {
    name: "M24",
    description: "Mancuerna Ajustable 24 kg",
    href: "https://lullax.com/product/m24-mancuerna-ajustable/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081699/Lullax/M20_hepxs8.png",
  },
  {
    name: "NEO20",
    description: "Mancuerna Ajustable 20 kg",
    href: "https://lullax.com/product/neo-20-mancuerna-ajustable/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715081698/Lullax/NEO20_lkerme.png",
  },
];

const EstanteMancuernas = [
  {
    name: "NEO STAND",
    description: "Soporte especial para las mancuernas NEO",
    href: "https://lullax.com/product/neo-stand/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715082633/Lullax/NEOSTAND_uyxnng.png",
  },
];

const BancoDeMusculacion = [
  {
    name: "NEO BENCH",
    description:
      "Banco profesional de alta gama construido con materiales resistentes de calidad",
    href: "https://lullax.com/product/neo-bench/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715082630/Lullax/NEOBENCH_n8eqtk.png",
  },
];

const KettebellsAjustables = [
  {
    name: "NEO KET",
    description:
      "Kettlebell ajustable de 22.5 Kg, con 5 posiciones de peso seleccionables.",
    href: "https://lullax.com/product/neoket/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715082631/Lullax/NEOKET_pd15hr.png",
  },
];

const BarraConPesosAjustables = [
  {
    name: "NEO BAR",
    description: "Set barra plana y zeta ajustable hasta 36Kg.",
    href: "https://lullax.com/product/neobar/",
    icon: "https://res.cloudinary.com/dszjgdktf/image/upload/v1715082630/Lullax/NEOBAR_ik9urk.png",
  },
];

const sobrenosotros = [
  {
    name: "Sobre Lullax",
    description: "Conoce nuestra empresa, misión y valores.",
    href: "https://lullax.com/sobre-lullax/",
    icon: FaRegBuilding,
  },
  {
    name: "Terminos y Condiciones",
    description: "Entregas, devoluciones y politicas.",
    href: "https://lullax.com/politica-de-envios/",
    icon: FaRegFileAlt,
  },
  {
    name: "Afiliados",
    description: "Gana comisiones por cada venta referida.",
    href: "https://lullax.com/afiliados-lullax/",
    icon: FaUserFriends,
  },
  {
    name: "Blog",
    description: "Artículos sobre fitness y entrenamiento.",
    href: "https://lullax.com/blog/",
    icon: FaBloggerB,
  },
];

const contacto = [
  {
    name: "Contacto",
    description: "Encontrá nuestra información de Teléfono, Email, Redes y Dirección.",
    href: "https://lullax.com/contact/",
    icon: MdConnectWithoutContact,
  },
];

function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* SELECT YOUR COUNTRY */}
        <div className="flex lg:flex-1">
          <a href="/es" className="-m-1.5 p-1.5">
            <span className="sr-only">Lullax</span>
            <Image src={LullaxLogo} width={200} height={200} alt="LullaxLogo" />
          </a>

          <div>
            <Popover.Group className="flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex flex-row items-center ml-6 cursor-pointer focus:outline-none hover:scale-105 transition-all duration-300">
                  <Image
                    src={EspanaIcon}
                    width={25}
                    height={25}
                    alt="EspanaIcon"
                  />
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-48 md:-left-8 top-full z-10 mt-3 w-screen max-w-xs md:max-w-lg overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <section className="p-4">
                      <h1 className="flex flex-col text-xl font-semibold mb-2 text-[#2b9f76]">
                        Seleccioná tu País
                      </h1>

                      <hr />

                      <div className="grid grid-cols-2 sm:grid-cols-3 py-4">
                        <Link href="/es" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={EspanaIcon}
                              width={25}
                              height={25}
                              alt="EspanaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              España
                            </p>
                          </div>
                        </Link>

                        <Link href="/pt">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={PortugalIcon}
                              width={25}
                              height={25}
                              alt="PortugalIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Portugal
                            </p>
                          </div>
                        </Link>

                        <Link href="/uk">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1 mb-4">
                            <Image
                              src={UnitedKingdomIcon}
                              width={25}
                              height={25}
                              alt="UnitedKingdomIcon}"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              United Kingdom
                            </p>
                          </div>
                        </Link>

                        <Link href="/fr" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1">
                            <Image
                              src={FranciaIcon}
                              width={25}
                              height={25}
                              alt="FranciaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              France
                            </p>
                          </div>
                        </Link>

                        <Link href="/de" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1">
                            <Image
                              src={AlemaniaIcon}
                              width={25}
                              height={25}
                              alt="AlemaniaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Deutschland
                            </p>
                          </div>
                        </Link>

                        <Link href="/it" className="cursor-pointer">
                          <div className="flex flex-row items-center hover:scale-105 transition-all duration-300 space-x-1">
                            <Image
                              src={ItaliaIcon}
                              width={25}
                              height={25}
                              alt="ItaliaIcon"
                            />
                            <p className="text-sm font-bold text-neutral-900">
                              Italia
                            </p>
                          </div>
                        </Link>
                      </div>
                    </section>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-white h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex flex-row gap-x-6">
            <Link href="/">
              <h1 className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-neutral-200 focus:outline-none">
                Inicio
              </h1>
            </Link>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-neutral-200 focus:outline-none">
                  Productos
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <ScrollShadow hideScrollBar className="h-[400px]">
                      <div className="p-4">
                        <h1 className="pl-4 pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                          Mancuernas Ajustables
                        </h1>
                        {MancuernasAjustables.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Image
                                src={item.icon}
                                width={25}
                                height={25}
                                className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                                aria-hidden="true"
                                alt={item.name}
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <h1 className="pl-4 pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                          Estante de Mancuernas
                        </h1>
                        {EstanteMancuernas.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Image
                                src={item.icon}
                                className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                                width={50}
                                height={50}
                                aria-hidden="true"
                                alt={item.name}
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <h1 className="pl-4 pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                          Banco de Musculacion
                        </h1>
                        {BancoDeMusculacion.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Image
                                src={item.icon}
                                className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                                width={50}
                                height={50}
                                aria-hidden="true"
                                alt={item.name}
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <h1 className="pl-4 pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                          Kettebells Ajustables
                        </h1>
                        {KettebellsAjustables.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Image
                                src={item.icon}
                                className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                                width={50}
                                height={50}
                                aria-hidden="true"
                                alt={item.name}
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-4">
                        <h1 className="pl-4 pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                          Barra con Pesos Ajustables
                        </h1>
                        {BarraConPesosAjustables.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                          >
                            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <Image
                                src={item.icon}
                                className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                                width={50}
                                height={50}
                                aria-hidden="true"
                                alt={item.name}
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollShadow>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Popover.Group className="hidden lg:flex lg:gap-x-12">
              <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-neutral-200 focus:outline-none">
                  Nosotros
                  <ChevronDownIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                  />
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-44 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                    <div className="p-4">
                      {sobrenosotros.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                        >
                          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              className="h-6 w-6 text-gray-600 group-hover:text-[#2b9f76]"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Popover.Panel>
                </Transition>
              </Popover>
            </Popover.Group>

            <Link href={"/contacto"}>
              <h1 className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-neutral-200 focus:outline-none">
                Contacto
              </h1>
            </Link>

            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 focus:outline-none">
              <Image src={UserIcon} width={18} height={18} alt="UserIcon" />
            </div>

            <div className="flex items-center gap-x-0.5 text-sm font-semibold leading-6 focus:outline-none">
              <Image
                src={ShoppingBag01Icon}
                width={18}
                height={18}
                alt="ShoppingBag01Icon"
              />
            </div>
          </div>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 pb-6">
              <span className="sr-only">Lullax</span>
              <Image
                src={LullaxLogo}
                width={200}
                height={200}
                alt="LullaxLogo"
              />

              {/* <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 focus:outline-none">
                <Image src={UserIcon} width={24} height={24} alt="UserIcon" className="bg-red-300"/>
              </div>

              <div className="flex items-center gap-x-0.5 text-sm font-semibold leading-6 focus:outline-none">
                <Image
                  src={ShoppingBag01Icon}
                  width={24}
                  height={24}
                  alt="ShoppingBag01Icon"
                  className="bg-red-300"
                />
              </div> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 ">
              <div>
                <ScrollShadow hideScrollBar className="h-[400px]">
                  <div className="mt-6">
                    <h1 className="pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                      Mancuernas Ajustables
                    </h1>
                    {MancuernasAjustables.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <Image
                            src={item.icon}
                            width={25}
                            height={25}
                            className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                            aria-hidden="true"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h1 className="pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                      Estante de Mancuernas
                    </h1>
                    {EstanteMancuernas.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <Image
                            src={item.icon}
                            className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                            width={50}
                            height={50}
                            aria-hidden="true"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h1 className="pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                      Banco de Musculacion
                    </h1>
                    {BancoDeMusculacion.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <Image
                            src={item.icon}
                            className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                            width={50}
                            height={50}
                            aria-hidden="true"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h1 className="pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                      Kettebells Ajustables
                    </h1>
                    {KettebellsAjustables.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <Image
                            src={item.icon}
                            className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                            width={50}
                            height={50}
                            aria-hidden="true"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h1 className="pb-2 text-lg text-[#2b9f76] font-semibold border-b">
                      Barra con Pesos Ajustables
                    </h1>
                    {BarraConPesosAjustables.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <Image
                            src={item.icon}
                            className="h-8 w-8 text-gray-600 group-hover:text-[#a482fb]"
                            width={50}
                            height={50}
                            aria-hidden="true"
                            alt={item.name}
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollShadow>
              </div>

              <div>
                <h1 className="text-xl font-semibold text-[#2b9f76] border-b py-2 mt-6 mb-2">
                  Nosotros
                </h1>
                <div className="">
                  {sobrenosotros.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-[#2b9f76]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h1 className="text-xl font-semibold text-[#2b9f76] border-b py-2 mt-6 mb-2">
                  Contacto
                </h1>
                <div className="">
                  {contacto.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-[#2b9f76]"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 hover:text-[#2b9f76]"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default NavBar;
