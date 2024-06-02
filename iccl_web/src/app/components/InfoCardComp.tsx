import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  text: string;
  imgSrc: string;
};

const InfoCardComp: FunctionComponent<Props> = ({ title, text, imgSrc }) => {
  return (
    <div className="w-sm h-[350px] bg-white border border-gray-200 rounded-lg shadow ">
      <div className="p-4 h-full grid grid-cols-1 place-content-between">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{text}</p>
        <img className="rounded-b-lg w-full" src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default InfoCardComp;
