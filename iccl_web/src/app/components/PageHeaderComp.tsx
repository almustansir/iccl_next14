import React, { FunctionComponent } from "react";

type Props = {
  title: string;
  subTitle: string;
};

const PageHeaderComp: FunctionComponent<Props> = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className=" text-xl font-bold text-center md:text-4xl md:font-extrabold">
        {title}
      </h2>
      <p className=" text-center text-sm text-[#737373] mx-3 md:text-base">
        {subTitle}
      </p>
    </div>
  );
};

export default PageHeaderComp;
