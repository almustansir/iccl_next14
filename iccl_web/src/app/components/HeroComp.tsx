import React from "react";

const HeroComp = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="relative w-full">
            <img
              src="homeBackGround.png"
              className=" object-cover w-full h-[420px] md:h-[520px]"
            />
          </div>
          <div className=" absolute top-16 md:top-20 bg-gray-500 bg-opacity-40 to-transparent w-full h-[420px] md:h-[520px]">
            <div className=" mx-10 md:mx-16 lg:mx-28">
              <h1 className="  mt-10 text-[#252B42] text-4xl font-extrabold md:text-5xl">
                International <br /> Classic <br /> Composite Ltd.
              </h1>
              <h3 className="  mt-10 text-[#B22222] text-2xl font-semibold">
                Delivering Excellence since 1984
              </h3>
              <div className=" mt-16 grid grid-cols-2 place-content-center md:max-w-96 md:mx-0 md:mt-10 lg:max-w-[480px]">
                <button className=" px-3 py-2 bg-[#B22222] border-2 border-[#B22222] text-white rounded-xl mr-6 text-xs hover:bg-transparent font-semibold md:max-w-40 lg:text-lg lg:max-w-80">
                  Get Quote Now
                </button>
                <button className=" px-3 py-1 border-2 border-[#00A0C1]  text-white rounded-xl mr-6 text-sm hover:bg-[#00A0C1] hover:text-white font-semibold md:max-w-40 lg:text-lg lg:max-w-80">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" z-10 grid grid-cols-1 justify-center place-items-center gap-0 w-full md:absolute md:grid-cols-3 md:gap-3 md:-mt-36  lg:justify-evenly">
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-gray-100 md:h-44 md:w-64 lg:w-80">
          <img src="DMVector.png" className=" w-12 h-12" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-gray-700 lg:text-base">
            We focus on ergonomics and meeting you where you work.
          </p>
        </div>
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-gray-100 md:h-44 md:w-64 lg:w-80">
          <img src="nt50Vector.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-gray-900">
            National top 50 firms
          </h3>
          <p className=" text-sm font-normal text-gray-700 ">
            Just type what&apos;s on your mind and we'll get you there.
          </p>
        </div>
        <div className=" p-5 mt-10 w-80 min-h-36 shadow-[0_40px_40px_-15px_rgba(0,0,0,0.3)] bg-[#BB2222] md:h-44 md:w-64 lg:w-80">
          <img src="DMvextor2.png" className=" w-12 h-10" />
          <h3 className=" mb-2 text-xl font-bold tracking-tight text-[#fff]">
            Digital Marketing
          </h3>
          <p className=" text-sm font-normal text-[#fff]">
            the quick fox jumps over the lazy dog
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComp;
