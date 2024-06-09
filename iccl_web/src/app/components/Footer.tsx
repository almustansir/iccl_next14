import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mb-0 my-0 mt-20 text-center">
        <div className="mt-2 bg-[#b22222] absilue overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center text-white justify-evenly">
          <div className=" grid grid-cols-1 gap-7 md:grid-cols-4 place-items-center justify-items-center align-middle">
            <ul className=" flex flex-col gap-1 ">
              <h4 className=" font-bold">Company Info</h4>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
            <ul className=" flex flex-col gap-1">
              <h4 className=" font-bold">Legal</h4>
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
            <ul className=" flex flex-col gap-1">
              <h4 className=" font-bold">Features</h4>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
            <ul className=" flex flex-col gap-1">
              <h4 className=" font-bold">Resources</h4>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
            <ul className=" flex flex-col gap-4 w-full items-center md:col-span-2 md:gap-2">
              <h4 className=" font-bold">Get In Touch</h4>
              <li className=" flex flex-row justify-left md:justify-center">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2222 80840</p>
              </li>
              <li className=" flex flex-row justify-left md:justify-center">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2226 2720</p>
              </li>
              <li className=" flex flex-row justify-left md:justify-center">
                <img src="call.png" className=" w-6" />{" "}
                <p className="">(+880) 2228 0826</p>
              </li>
            </ul>
            <ul className="flex flex-col gap-1 place-items-center items-start md:col-span-2">
              <h4 className=" font-bold">Address</h4>
              <li className=" flex flex-row justify-left md:justify-center">
                <img src="location.png" className=" w-6 h-6" />{" "}
                <p className=" text-left">
                  House 73, Road 17a, Block-E Bonani, Dhaka-1213, Bangladesh
                </p>
              </li>
              <li className=" flex flex-row justify-left md:justify-center">
                <img src="location.png" className=" w-6 h-6" />{" "}
                <p className=" text-left">Naojur, Kodda, Jooydebpur, Gazipur</p>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-col justify-between py-3 md:flex-row place-items-center md:mx-14 lg:mx-24">
          <h5 className=" font-semibold text-sm md:text-base text-[#737373]">
            Made With Love By Biznextit All Right Reserved{" "}
          </h5>
          <div className=" flex flex-row justify-center gap-6 mt-3 place-items-center">
            <img src="fbFooter.png" className=" w-5 h-5" />
            <img src="insFooter.png" className=" w-5 h-5" />
            <img src="Xfooter.png" className=" w-5 h-5" />
            <img src="yTubeFooter.png" className=" w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
