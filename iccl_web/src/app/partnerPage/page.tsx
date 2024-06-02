import React from "react";

const page = () => {
  return (
    <div className=" ">
      <h1 className=" mt-36 text-center text-5xl font-extrabold">
        Our Partners
      </h1>
      <div className="mt-16 mx-16 grid grid-cols-2 gap-5 place-items-center md:grid-cols-6">
        <img src="hooli.png" className="w-20 h-20" />
        <img src="lyft.png" className="w-20 h-20" />
        <img src="piperHat.png" className="w-20 h-20" />
        <img src="stripe.png" className="w-20 h-20" />
        <img src="aws.png" className="w-20 h-20" />
        <img src="reddit.png" className="w-20 h-20" />
      </div>
    </div>
  );
};

export default page;
