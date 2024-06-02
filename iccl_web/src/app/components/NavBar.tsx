"use client";

import React, { useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [isMenueOpen, setMenu] = useState(false);
  return (
    <nav className=" bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-2 rtl:space-x-reverse">
          <img src="./main_logo.jpeg" className=" h-8" />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 00 ay-700 gray-600"
          onClick={() => setMenu(true)}
        >
          <img src="moboaNav.png" alt="" />
        </button>

        {/* desktop menu */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-0 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li className=" md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
              >
                Home
              </a>
            </li>
            <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./aboutPage"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
              >
                About
              </a>
            </li>
            <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./partnerPage"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
              >
                Partner
              </a>
            </li>
            <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./valueChainPage"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
              >
                Value Chain
              </a>
            </li>
            <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./sustainabilityPage"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
              >
                Sustainability
              </a>
            </li>
            <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
              <a
                href="./galleryPage"
                className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "absolute h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
            isMenueOpen && "translate-x-0 z-10"
          )}
        >
          <section className=" text-white bg-[#b22222] w-56 flex-cl absolute left-0 top-0 h-screen p-8 gap-8 scrollbar-hide overflow-hidden">
            <img
              onClick={() => setMenu(false)}
              src="x-btn.png"
              className=" mt-0 mb-8 h-8 w-8 cursor-pointer bg-black"
            />

            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="./"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./aboutPage"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="./partnerPage"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                >
                  Partner
                </a>
              </li>
              <li>
                <a
                  href="./valueChainPage"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                >
                  Value Chain
                </a>
              </li>
              <li>
                <a
                  href="./sustainabilityPage"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="./galleryPage"
                  className="flex items-center p-2 rounded-lg
                  text-white hover:bg-gray-100 group border border-gray-400"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
