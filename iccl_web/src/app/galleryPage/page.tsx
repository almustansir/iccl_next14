"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import DesktopNav from "../components/DesktopNav";
import clsx from "clsx";
import ProductCardComp from "../components/ProductCardComp";

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
        <div>
          <h1 className=" mt-10 text-center text-xl font-bold md:text-4xl md:font-extrabold">
            Our products
          </h1>
          <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 place-items-center mx-16 md:mx-24 md:gap-5">
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="705 Black Men&aposs T-shirt"
              price={195}
              productId="001"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="705 White Men&aposs T-shirt"
              price={195}
              productId="002"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="705 Black Men&aposs T-shirt"
              price={195}
              productId="003"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Base Jeans"
              title="705 Black Men&aposs T-shirt"
              price={495}
              productId="004"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="705 Black Men&aposs T-shirt"
              price={195}
              productId="005"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1716541424893-734612ddcabb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="Blook T-shirt"
              price={295}
              productId="006"
            />
            <ProductCardComp
              imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              imgAlt="Black tShirt"
              title="705 Black Men&aposs T-shirt"
              price={195}
              productId="007"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
