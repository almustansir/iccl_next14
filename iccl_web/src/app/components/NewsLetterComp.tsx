import React from "react";

const NewsLetterComp = () => {
  return (
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
  );
};

export default NewsLetterComp;
