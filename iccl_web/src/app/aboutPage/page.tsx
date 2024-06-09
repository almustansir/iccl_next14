"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import DesktopNav from "../components/DesktopNav";
import clsx from "clsx";
import NewsLetterComp from "../components/NewsLetterComp";

const Page = () => {
  const [isMenueOpen, setMenu] = useState(false);
  return (
    <div>
      <nav className=" bg-white border-gray-200">
        <div className=" mx-1 md:mx-14 lg:mx-24 flex flex-wrap items-center justify-between p-4">
          <a
            href=""
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
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
          <DesktopNav />

          {/* sidebar mobile menu */}
          <div
            className={clsx(
              "absolute h-full w-screen md:hidden backdrop-blur-sm top-0 right-0 -translate-x-full transition-all",
              isMenueOpen && "translate-x-0 z-10 scroll-none"
            )}
          >
            <section className=" text-white overscroll-contain bg-[#b22222] w-full flex-cl absolute left-0 top-0 h-screen p-8 gap-8 scrollbar-hide overflow-hidden">
              <img
                onClick={() => setMenu(false)}
                src="x-btn.png"
                className=" mt-0 mb-8 h-8 w-8 cursor-pointer bg-black"
              />

              <div className=" grid gap-3 place-content-center">
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/" onClick={() => setMenu(false)}>
                    Home
                  </a>
                </div>
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/aboutPage" onClick={() => setMenu(false)}>
                    About
                  </a>
                </div>
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/partnerPage" onClick={() => setMenu(false)}>
                    Partner
                  </a>
                </div>
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/valueChainPage" onClick={() => setMenu(false)}>
                    Value Chain
                  </a>
                </div>
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/sustainabilityPage" onClick={() => setMenu(false)}>
                    Sustainability
                  </a>
                </div>
                <div className=" text-center border-2 border-[#00A0C1] w-48 rounded-xl h-10 place-content-center">
                  <a href="/galleryPage" onClick={() => setMenu(false)}>
                    Gallery
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </nav>
      <div className={clsx("", isMenueOpen && "hidden")}>
        <div className=" mt-7 mx-10 md:mx-16 lg:mx-20">
          <h2 className=" text-center text-3xl md:text-4xl font-semibold">
            About us
          </h2>
          <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h3 className=" font-semibold text-xl md:text-3xl">
                We are ICCL
              </h3>
              <div className=" font-base text-sm from-neutral-700 mt-2 md:mt-3 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                fugit ipsa pariatur enim totam aliquid quisquam a similique
                iure, dolorum commodi, ex magni. Dolorem blanditiis magni qui
                dignissimos id atque? Ea voluptates maiores asperiores tempora
                voluptate praesentium sequi, sint similique aperiam quos! Vero
                vitae animi libero, similique cumque pariatur nisi ut ex ipsa
                aliquam esse error ipsum repudiandae ipsam recusandae.
                Recusandae, molestias dolorem deleniti esse labore quisquam
                similique? Pariatur perspiciatis minus, reprehenderit est culpa
                dolor voluptas sint temporibus labore iusto animi, perferendis,
                consequuntur vel ex hic adipisci deserunt corporis delectus.
              </div>
            </div>
            <img
              src="https://c8.alamy.com/comp/EDDA3N/group-of-happy-clothing-factory-co-workers-thumbs-up-EDDA3N.jpg"
              alt=" ICCL employees"
              className=" mt-3 md:mt-4"
            />
          </div>
        </div>
        <div className=" mt-7 mx-10 md:mx-16 lg:mx-20 grid grid-cols-1 md:grid-cols-2">
          <div className=" text-sm from-neutral-700 mt-2">
            <h3 className=" text font-semibold text-xl">Visit Us</h3>
            <p>
              <span className=" font-semibold">Head Office</span>: House 73,
              Road 17a, Block-E Bonani, Dhaka-1213, Bangladesh
            </p>
            <p>
              <span className=" font-semibold">Factory</span>: Naojur, Kodda,
              Jooydebpur, Gazipur
            </p>
          </div>
          <div className=" hidden"></div>
          <div>
            <h3 className=" mt-5 text font-semibold text-xl">Contact Us</h3>
            <p className=" text-sm from-neutral-700 mt-2">
              <li className=" flex flex-row justify-left ">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2222 80840</p>
              </li>
              <li className=" flex flex-row justify-left ">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2226 2720</p>
              </li>
              <li className=" flex flex-row justify-left ">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2228 0826</p>
              </li>
            </p>
          </div>
        </div>
        <NewsLetterComp />
        <div className="  mt-7 mx-10 md:mx-16 lg:mx-20">
          <h3 className=" font-semibold text-xl">Email us</h3>
          <form className=" mt-3 grid grid-cols-1">
            <input
              type="text"
              placeholder="Name"
              className=" border rounded-md px-2 py-1"
            />
            <input
              type="text"
              placeholder="email"
              className=" border rounded-md px-2 py-1 mt-3"
            />
            <textarea
              placeholder="Write your thoughts"
              className=" border rounded-md px-2 py-1 mt-3"
            />
            <textarea
              id="message"
              rows={4}
              className="border rounded-md px-2 py-1 mt-3 block p-2.5 w-full text-sm text-gray-900 border-gray-300  "
              placeholder="Write your thoughts here..."
            ></textarea>
            <input
              type="button"
              value="Submit"
              className=" border rounded-md px-2 py-1 mt-3 text-[#b22222] hover:text-white hover:bg-[#B22222]"
            />
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
