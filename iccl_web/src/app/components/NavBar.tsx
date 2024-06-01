"use client";

import React, { useState } from "react";
import clsx from "clsx";

const NavBar = () => {
  const [isMenueOpen, setMenu] = useState(false);
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            ICCL
          </span>
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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  md -700">
            <li>
              <a
                href="./"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md 00"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="./aboutPage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md blue-500 ay-700 white md ansparent"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="./partnerPage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md blue-500 ay-700 white md ansparent"
              >
                Partner
              </a>
            </li>
            <li>
              <a
                href="./valueChainPage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md blue-500 ay-700 white md ansparent"
              >
                Value Chain
              </a>
            </li>
            <li>
              <a
                href="./sustainabilityPage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md blue-500 ay-700 white md ansparent"
              >
                Sustainability
              </a>
            </li>
            <li>
              <a
                href="./galleryPage"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md blue-500 ay-700 white md ansparent"
              >
                Gallery
              </a>
            </li>
          </ul>
        </div>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            "fixed h-full w-screen md:hidden bg-black/50 backdrop-blur-sm top-0 left-0 -translate-x-full transition-all",
            isMenueOpen && "translate-x-0"
          )}
        >
          <section className=" text-white bg-slate-900 w-56 flex-cl absolute left-0 top-0 h-screen p-8 gap-8 z-50">
            <img
              onClick={() => setMenu(false)}
              src="x-btn.png"
              className=" mt-0 mb-8 h-8 w-8 cursor-pointer bg-black"
            />

            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="./"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="./aboutPage"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="./partnerPage"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  Partner
                </a>
              </li>
              <li>
                <a
                  href="./valueChainPage"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  Value Chain
                </a>
              </li>
              <li>
                <a
                  href="./sustainabilityPage"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="./galleryPage"
                  className="flex items-center p-2 text-gray-900 rounded-lg
                  dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
