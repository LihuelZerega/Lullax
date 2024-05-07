"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Promo() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl lg:max-w-6xl">
                <div className="relative overflow-hidden bg-white">
                  <div className="pb-20 pt-16 sm:pb-40 sm:pt-24 lg:pb-28 lg:pt-20">
                    <div className="relative mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
                      <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                          ¡Anunciamos <span className="text-[#2b9f76]"> Rebajas Pre</span>-verano!
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                          Explora nuestra selección de productos y encuentra los
                          mejores descuentos que te ayudarán a sacar el máximo
                          provecho de la temporada. No te pierdas esta
                          oportunidad de ahorrar mientras te preparas para el
                          verano.
                        </p>
                      </div>
                      <div>
                        <div className="mt-10">
                          <div
                            aria-hidden="true"
                            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                          >
                            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                              <div className="flex items-center space-x-6 lg:space-x-8">
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                  <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114987/Lullax/PreRebajas2_drdvbf.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114987/Lullax/PreRebajas1_p7xzmz.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114987/Lullax/PreRebajas3_pbbwqs.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114988/Lullax/PreRebajas4_gs65f0.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114987/Lullax/PreRebajas2_drdvbf.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                </div>
                                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114987/Lullax/PreRebajas1_p7xzmz.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                  <div className="h-64 w-44 overflow-hidden rounded-lg">
                                    <img
                                      src="https://res.cloudinary.com/dszjgdktf/image/upload/v1715114988/Lullax/PreRebajas4_gs65f0.png"
                                      alt=""
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col items-start space-y-3">
                            <a
                              href="#productos"
                              onClick={() => setOpen(false)}
                              className="inline-block rounded-md border border-transparent bg-[#2b9f76] px-8 py-3 text-center font-medium text-white hover:bg-[#09865a]"
                            >
                              Ver Productos
                            </a>

                            <div
                              onClick={() => setOpen(false)}
                              className="inline-block rounded-md border border-transparent border-[#2b9f76] text-[#2b9f76] px-8 py-3 text-center font-medium hover:text-[#09865a] hover:bg-neutral-100 cursor-pointer"
                            >
                              Ver mas tarde
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
