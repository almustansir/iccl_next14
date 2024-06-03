import React from "react";
import PageHeaderComp from "./PageHeaderComp";

const GetInTouchComp = () => {
  return (
    <div className=" mt-24 text-center ">
      <PageHeaderComp
        title="Get In Touch"
        subTitle="Problems trying to resolve the conflict between the two major realms
      of Classical physics: Newtonian mechanics"
      />
      <div className=" mt-12 grid grid-cols-1 gap-4 mx-3 md:grid-cols-3 md:mx-14 ">
        <div className=" h-52 px-6 py-4 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow grid grid-cols-1 gap-0 place-items-center md:h-60  ">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Contact us
            </h5>
          </a>
          <p className="mb-3 font-normal text-sm text-gray-700 ">
            (+880) 2222 80840
          </p>
          <p className="mb-3 font-normal text-sm text-gray-700 ">
            (+880) 2222 80840
          </p>
          <p className="mb-3 font-normal text-sm text-gray-700 ">
            (+880) 2222 80840
          </p>
          <p className="mb-3 font-light text-xs text-gray-700  md:text-[10px]">
            *we are open from 9am-9pm
          </p>
        </div>
        <div className=" h-52 px-6 py-4 p-6 bg-[#252B42] border border-gray-200 rounded-lg shadow text-white grid grid-cols-1 gap-0 place-items-center md:h-60">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight ">Email Us</h5>
          </a>
          <p className="mb-3 font-normal text-sm ">iccl@classic-match.com</p>
          <p className="mb-3 font-normal text-sm ">hrcompliance@icclbd.com</p>
          <p className="mb-3 font-normal text-sm ">Fax: 88-02-9262368</p>
        </div>
        <div className=" h-52 px-6 py-4 bg-gray-100 border border-gray-200 rounded-lg shadow md:h-60 ">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
              Visit Us
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 grid grid-cols-5 text-sm text-left md:text-xs">
            <span className=" col-span-2">Head Office:</span>{" "}
            <span className=" col-span-3">
              House 73, Road 17a, Block-E Bonani, Dhaka-1213, Bangladesh
            </span>
          </p>
          <p className="mb-3 font-normal text-gray-700 grid grid-cols-5 text-left text-sm md:text-xs">
            <span className=" col-span-2">Factory:</span>{" "}
            <span className=" col-span-3">
              Naojur, Kodda, Jooydebpur, Gazipur
            </span>
          </p>
          <p className="mb-3 text-xm font-light text-gray-700 text-xs md:text-[10px] ">
            *we are open from 9am-9pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchComp;
