import React from "react";
import PageHeaderComp from "./PageHeaderComp";
import NewVideoPlayer from "./NewVideoPlayer";

const ServicesComp = () => {
  return (
    <div className=" mt-24">
      <PageHeaderComp
        title="Best Business Service."
        subTitle="Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics"
      />
      <div className=" flex flex-col md:flex-row md:mx-8 md:justify-between lg:justify-around">
        <div className=" mt-5 mx-3 md:w-96 lg:w-[600px]">
          <NewVideoPlayer />
        </div>
        <div className=" text-center md:text-left md:w-72 lg:w-96">
          <h2 className=" text-xl font-bold mt-5 lg:text-2xl">
            Most trusted in our field
          </h2>
          <p className=" text-sm text-[#737373] mx-10 md:mx-0">
            Most calendars are designed for teams. Slate is designed for
            freelancers who want a simple way to plan their schedule.
          </p>
          <div className=" mt-10 flex flex-row gap-2 mx-10 items-center text-left md:mx-0">
            <img src="ppl.png" className=" w-10 h-10 mt-0 lg:w-14 lg:h-14" />
            <div>
              <h4 className=" font-bold text-base text-[#252B42] mt-0 md:text-sm lg:text-lg">
                the quick fox jumps over the lazy dog
              </h4>
              <p className=" font-semibold text-sm text-[#737373] mt-0 md:text-xs lg:text-base">
                Things on a very small scale ...
              </p>
            </div>
          </div>
          <div className=" mt-5 flex flex-row gap-2 mx-10 items-center text-left md:mx-0 ">
            <img src="watch.png" className=" w-10 h-10 mt-0 lg:w-14 lg:h-14" />
            <div>
              <h4 className=" font-bold text-base text-[#252B42] mt-0 md:text-sm lg:text-lg">
                the quick fox jumps over the lazy dog
              </h4>
              <p className=" font-semibold text-sm text-[#737373] mt-0 md:text-xs lg:text-base">
                Things on a very small scale ...
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 mx-16 grid grid-cols-2 gap-5 place-items-center md:grid-cols-6">
        <img
          src="hooli.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
        <img
          src="lyft.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
        <img
          src="piperHat.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
        <img
          src="stripe.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
        <img
          src="aws.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
        <img
          src="reddit.png"
          className="w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28"
        />
      </div>
      <div className=" mt-10 mx-5 md:mx-14 bg-[#b22222] pb-4 pt-3 px-8 flex flex-col md:flex-row md:justify-between md:py-4 lg:mx-36">
        <h1 className=" text-center font-bold text-base md:text-sm place-content-center text-white">
          Subscribe For Latest Newsletter
        </h1>
        <form className=" grid grid-cols-5 mt-2 gap-2 lg:w-[50%] ">
          <input
            type="text"
            placeholder="Your Email"
            className=" col-span-3 block text-gray-700 text-xs md:text-sm font-semiBold py-1 px-2 mb-2 rounded h-full"
          />
          <input
            type="button"
            value="Subcribe"
            className=" py-1 col-span-2 px-3 border-2 border-[#00A0C1]  text-white rounded-xl text-sm hover:bg-[#00A0C1] hover:text-white font-semibold"
          />
        </form>
      </div>
    </div>
  );
};

export default ServicesComp;
