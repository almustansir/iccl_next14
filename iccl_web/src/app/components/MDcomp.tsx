import React from "react";
import PageHeaderComp from "./PageHeaderComp";
import InfoCardComp from "./InfoCardComp";

const MDcomp = () => {
  return (
    <div className=" mt-16 ">
      <PageHeaderComp
        title="Making Difference"
        subTitle="Problems trying to resolve the conflict between the two major realms
      of Classical physics: Newtonian mechanics"
      />
      <div className=" mt-8 mx-12 grid grid-cols-1 gap-4 place-items-center md:grid-cols-2 lg:grid-cols-4">
        <InfoCardComp
          title="A single source of truth"
          text=" Newton thought that light was made up of particles."
          imgSrc="singleSrc.png"
        />
        <InfoCardComp
          title="Fastest way to organize"
          text="Newton thought that light was made up of particles."
          imgSrc="organize.png"
        />
        <InfoCardComp
          title="Fastest way to take action"
          text="They describe a universe consisting of bodies moving"
          imgSrc="takeAction.png"
        />
        <InfoCardComp
          title="Work better together"
          text="Newton thought that light was made up of particles."
          imgSrc="wrkTogenther.png"
        />
      </div>
    </div>
  );
};

export default MDcomp;
