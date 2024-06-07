import React from "react";

const DesktopNav = () => {
  return (
    <div className="hidden w-full  md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-0 rtl:space-x-reverse md:mt-0 border-0 md:bg-white">
        <li className=" md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700"
          >
            Home
          </a>
        </li>
        <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/aboutPage"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
          >
            About
          </a>
        </li>
        <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/partnerPage"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
          >
            Partner
          </a>
        </li>
        <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/valueChainPage"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
          >
            Value Chain
          </a>
        </li>
        <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/sustainabilityPage"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
          >
            Sustainability
          </a>
        </li>
        <li className="md:bg-white md:px-2 md:py-2 md:border md:border-white md:hover:border-gray-200">
          <a
            href="/galleryPage"
            className="block py-1 px-1 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-900"
          >
            Gallery
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;
