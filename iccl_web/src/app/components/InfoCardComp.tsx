import React, { FunctionComponent } from "react";

interface Props {
  title: string;
  text: string;
  imgSrc: string;
}

const InfoCardComp: FunctionComponent<Props> = ({ title, text, imgSrc }) => {
  return (
    <div className="w-sm h-[300px] bg-white border border-gray-200 rounded-lg shadow md:[350px] overflow-hidden ">
      <div className="p-4 h-full grid grid-cols-1 place-content-between">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 md:text-2xl">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-sm text-gray-700 md:text-base">
          {text}
        </p>
        <img className="rounded-b-lg w-full" src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default InfoCardComp;
