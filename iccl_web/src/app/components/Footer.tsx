import React from "react";

const Footer = () => {
  return (
    <div>
      <div className=" mb-0 my-0 mt-20 text-center">
        <div className=" flex flex-row justify-between bg-[#fff] px-[15px]">
          <div className=" text-left">
            <h4 className=" text-sm font-bold text-[#252B42]">
              Consulting Agency For Your Business
            </h4>
            <p className=" text-[#737373] font-medium text-xs">
              the quick fox jumps over the lazy dog
            </p>
          </div>
          <button className="p-2 border-2 bg-[#B22222] border-[#B22222] text-[#fff] rounded-xl text-l hover:text-black hover:bg-[#fff] ">
            Contact Us
          </button>
        </div>
        <div className="mt-2 bg-gradient-to-r from-purple-800 via-pink-800 to-green-800 absilue overflow-hidden bg-cover bg-center bg-no-repeat p-12 text-center text-white justify-evenly">
          <div className=" flex justify-around">
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
          </div>
          <div className=" flex justify-around mt-5">
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
          </div>
          <ul className=" flex flex-col gap-4 w-full mt-5">
            <h4 className=" font-bold">Get In Touch</h4>
            <li className=" flex flex-row justify-left">
              <img src="call.png" className=" w-6" />{" "}
              <p className="">(480) 555-0103</p>
            </li>
            <li className=" flex flex-row justify-left">
              <img src="location.png" className=" w-6 h-6" />{" "}
              <p className=" text-left">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </li>
            <li className=" flex flex-row justify-left">
              <img src="msg.png" className=" w-6" />{" "}
              <p>debra.holt@example.com</p>
            </li>
          </ul>
        </div>
        <div className=" flex flex-col justify-between px-[100px] py-3">
          <h5 className=" font-semibold text-md text-[#737373]">
            Made With Love By Biznextit All Right Reserved{" "}
          </h5>
          <div className=" flex flex-row justify-center gap-6 mt-3">
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
