import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  subTitle: string;
};

const PageHeaderComp: FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <div className=" grid grid-cols-1 place-items-center">
      <h2 className=" text-xl font-bold text-center md:text-4xl md:font-extrabold">
        {title}
      </h2>
      <p className=" text-center text-sm text-[#737373] mx-3 mt-3 md:text-base md:max-w-96 md:text-center">
        {subTitle}
      </p>
    </div>
  );
};

export default PageHeaderComp;
