import React from "react";
import PageHeaderComp from "./PageHeaderComp";

const AchivementsComp = () => {
  return (
    <div className=" mt-24 md:mt-44">
      <PageHeaderComp
        title="WHY CHOOSE US"
        subTitle="Problems trying to resolve the conflict between the two major realms of classNameical physics: Newtonian mechanics"
      />
      <div className=" mt-7 grid grid-cols-2 gap-2 place-items-center text-center md:grid-cols-4 md:mx-28 md:gap-20 ">
        <div className=" w-36 py-2 bg-gray-100 grid grid-cols-1 place-content-stretch place-items-center md:h-40 lg:h-52 lg:w-48">
          <img src="casesDone.png" className=" w-14 md:w-16" />
          <div>
            <h3 className=" font-bold text-xl text-[#252B42] md:text-3xl mt-2">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-xs lg:text-sm">
              CASES DONE
            </p>
          </div>
        </div>
        <div className=" w-36 py-2 bg-gray-100 grid grid-cols-1 place-content-stretch place-items-center md:h-40 lg:h-52 lg:w-48">
          <img src="hpCustomers.png" className=" w-14 md:w-16" />
          <div>
            <h3 className=" font-bold text-xl text-[#252B42] md:text-3xl mt-2">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-xs mt-1 lg:text-sm">
              HAPPY CUSTOMERS
            </p>
          </div>
        </div>
        <div className=" w-36 py-2 bg-gray-100 grid grid-cols-1 place-content-stretch place-items-center md:h-40 lg:h-52 lg:w-48">
          <img src="awordIcn.png" className=" w-14 md:w-16" />
          <div>
            <h3 className=" font-bold text-xl text-[#252B42] md:text-3xl mt-2">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-xs mt-1 lg:text-sm">
              AWARD WINNING
            </p>
          </div>
        </div>
        <div className=" w-36 py-2 bg-gray-100 grid grid-cols-1 place-content-around place-items-center md:h-40 lg:h-52 lg:w-48">
          <img src="DMVector.png" className=" w-14 md:w-16" />
          <div>
            <h3 className=" font-bold text-xl text-[#252B42] md:text-3xl mt-2">
              3K
            </h3>
            <p className=" text-[#737373] font-bold text-xs md:text-xs mt-1 lg:text-sm">
              CASES DONE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchivementsComp;
